import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-khotabjmaa14',
  templateUrl: './khotabjmaa14.page.html',
  styleUrls: ['./khotabjmaa14.page.scss'],
})
export class Khotabjmaa14Page implements OnInit {
  public title;
  public text1;
  public title1;
  public text2;
  public title2;
  public khotab = [];

 ngOnInit() { 

  }
  
constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  
    this.title = getXMLDataKhotab("title");
    this.text1 = getXMLDataKhotab("text1");
    this.text2 = getXMLDataKhotab("text2");


     var i =0;
     for ( i=0; i< this.title.length; i++ ) {
     var onekhotab =[];
     onekhotab["title"] = this.title[i];
     onekhotab["text1"] = this.text1[i];
     onekhotab["text2"] = this.text2[i];
     this.khotab.push(onekhotab);
    }
 }


}

function getXMLDataKhotab( itemname:string ) {
  var request = new XMLHttpRequest();

  try {
    request.open('GET', 'assets/khotab-jmaa/jmaa14.xml', false);
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

