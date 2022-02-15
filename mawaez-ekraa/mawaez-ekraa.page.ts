import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import {StreamingMedia} from "@ionic-native/streaming-media/ngx";
@Component({
  selector: 'app-mawaez-ekraa',
  templateUrl: './mawaez-ekraa.page.html',
  styleUrls: ['./mawaez-ekraa.page.scss'],
})
export class MawaezEkraaPage implements OnInit {
  forwardshow: boolean = true;
  public title;
  public link;
  public khotab = [];

  ngOnInit() {

  }

  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {

    this.title = getXMLDataKhotab("title");
    this.link = getXMLDataKhotab("link");

    var i =0;
    for ( i=0; i< this.title.length; i++ ) {
      var onekhotab =[];
      onekhotab["title"] = this.title[i];
      onekhotab["link"] = this.link[i];
      this.khotab.push(onekhotab);
    }
  }
  ionViewWillEnter(){
    this.storage.get('page-mawaez-akhlakeya').then(value => {
      this.storage.remove(value);
    });
    this.storage.set('page-mawaez-akhlakeya', 'mawaez-ekraa');

  }
  // getlink(link:string){
  //   this.storage.set('khotab-alsayed-eqraa', link);
  //
  // }
  // forwardLink(){
  //   this.storage.get('khotab-alsayed-eqraa').then((link) => {
  //     setTimeout( () => {
  //       let options: NativeTransitionOptions = {
  //         direction: 'up',
  //         duration: 400,
  //       }
  //       this.nativePageTransitions.flip(options);
  //       this.router.navigate([link]);
  //     }, 350);
  //   });
  // }

    moveToPage(pageName) {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
    }
    this.nativePageTransitions.flip(options);
    this.router.navigate([pageName]);
   }


}
function getXMLDataKhotab( itemname:string ) {
  var request = new XMLHttpRequest();

  try {
    request.open('GET', 'assets/mawaez-lekaat-xml/mawaeztitels.xml', false);
    request.send(null);
  } catch (err) {
    return '';
  }

  if (request.status === 200 || request.status === 0) {
    var parser = new DOMParser();
    var doc = parser.parseFromString(request.responseText, "application/xml");
    var khotab = doc.getElementsByTagName("mawaeztext");
    var result = [];
    for (var i = 0; i < khotab.length; i++) {
      var khotabname = khotab[i];

      result.push(khotabname.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
    }

    return result;
  }

  return '';

}
