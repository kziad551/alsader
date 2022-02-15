import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-khotabmaktuba',
  templateUrl: './khotabmaktuba.page.html',
  styleUrls: ['./khotabmaktuba.page.scss'],
})
export class KhotabmaktubaPage implements OnInit {

  public title;
  public link;
  public khotab = [];

    forwardshow: boolean = true;
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
        this.storage.get('page-khotab-alsayed').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page-khotab-alsayed', 'khotabmaktuba');
        this.storage.get('khotab-alsayed-eqraa').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }
    getlink(link:string){
        this.storage.set('khotab-alsayed-eqraa', link);

    }
    forwardLink(){
        this.storage.get('khotab-alsayed-eqraa').then((link) => {
            setTimeout( () => {
                let options: NativeTransitionOptions = {
                    direction: 'up',
                    duration: 400,
                }
                this.nativePageTransitions.flip(options);
                this.router.navigate([link]);
            }, 350);
        });
    }



            moveToPage(pageName) {
              setTimeout( () => {
                let options: NativeTransitionOptions = {
                  direction: 'up',
                  duration: 400,
                }
                this.nativePageTransitions.flip(options);
                this.router.navigate([pageName]);
              }, 350);
              
             }
            

}

function getXMLDataKhotab( itemname:string ) {
  var request = new XMLHttpRequest();

  try {
    request.open('GET', 'assets/khotab-jmaa/khotabjmaatitels.xml', false);
    request.send(null); 
  } catch (err) {  
    return '';
  }

  if (request.status === 200 || request.status === 0) { 
    var parser = new DOMParser();
    var doc = parser.parseFromString(request.responseText, "application/xml");
    var khotab = doc.getElementsByTagName("jmaatext");
    var result = [];
    for (var i = 0; i < khotab.length; i++) {
      var khotabname = khotab[i];  
      
      result.push(khotabname.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
    }
  
    return result;
  }
  
  return '';

}
