import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";   
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-khotabjmaa1',
  templateUrl: './khotabjmaa1.page.html',
  styleUrls: ['./khotabjmaa1.page.scss'],
})
export class Khotabjmaa1Page implements OnInit {
  private data:any = [];  
  public content:any[] = [];
  
  constructor(private http: HttpClient,private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  }
  ngOnInit(){       const url= 'https://strapi.alsader.net/api/khotab-al-jomaa-docs?filterskhotab-al-jomaa-doc-cats][title][$eq]=khotab-docs&locale=ar-IQ'
  this.http.get(url).subscribe((res)=>{
    this.data = res
    var i =0;
    for ( i=0; i< this.data.data.length; i++ ) {
      var array =[];
      array["title"] = this.data.data[i].attributes.title;
      array["titleP1"] = this.data.data[i].attributes.titleP1;
      array["p1"] = this.data.data[i].attributes.p1;
      array["titleP2"] = this.data.data[i].attributes.titleP2;
      array["p2"] = this.data.data[i].attributes.p2;
      this.content.push(array);      
     }
  }) }

    
}