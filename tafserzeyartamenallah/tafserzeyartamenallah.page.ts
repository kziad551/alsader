import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tafserzeyartamenallah',
  templateUrl: './tafserzeyartamenallah.page.html',
  styleUrls: ['./tafserzeyartamenallah.page.scss'],
})
export class TafserzeyartamenallahPage implements OnInit {
    forwardshow: boolean = true;
  public title;
  public text;
  public mawaez = [];

 ngOnInit() { 

  }
  
constructor(private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  
    this.title = getXMLDataMawaez("title");
    this.text = getXMLDataMawaez("text");

     var i =0;
     for ( i=0; i< this.title.length; i++ ) {
     var onemawaez =[];
     onemawaez["title"] = this.title[i];
     onemawaez["text"] = this.text[i];
     this.mawaez.push(onemawaez);
    }
 }
}

function getXMLDataMawaez( itemname:string ) {
  var request = new XMLHttpRequest();

  try {
    request.open('GET', 'assets/mawaez-lekaat-xml/zeyartamenalah.xml', false);
    request.send(null); 
  } catch (err) {  
    return '';
  }

  if (request.status === 200 || request.status === 0) { 
    var parser = new DOMParser();
    var doc = parser.parseFromString(request.responseText, "application/xml");
    var mawaez = doc.getElementsByTagName("mawaeztext");
    var result = [];
    for (var i = 0; i < mawaez.length; i++) {
      var mawaezname = mawaez[i];  
      
      result.push(mawaezname.getElementsByTagName(itemname)[0].childNodes[0].nodeValue)
    }
  
    return result;
  }
  
  return '';

}