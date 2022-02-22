import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";   
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-khotabjmaa42',
  templateUrl: './khotabjmaa42.page.html',
  styleUrls: ['./khotabjmaa42.page.scss'],
})
export class Khotabjmaa42Page implements OnInit {
  private data:any = [];  
  public content:any[] = [];

  constructor(private http: HttpClient,private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  }
 
  ngOnInit() { 
    this.storage.get('language-usingg').then(linkd => {
     if( linkd == 'ar'){
        this.data = [];
        this.content = [];
        const url= 'https://strapi.alsader.net/api/khotab-al-jomaa-docs?filters[id][$eq]=42?filters[khotab-al-jomaa-doc-cats][title][$eq]=khotab-docs&locale=ar-IQ'
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
        }) 
      }
      else if( linkd == 'en'){
        this.data = [];
        this.content = [];
        const url= 'https://strapi.alsader.net/api/khotab-al-jomaa-docs?filters[id][$eq]=42?filters[khotab-al-jomaa-doc-cats][title][$eq]=khotab-docs&locale=ar-IQ'
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
        }) 
    }
      else if( linkd == 'farsi'){
        this.data = [];
        this.content = [];
        const url= 'https://strapi.alsader.net/api/khotab-al-jomaa-docs?filters[id][$eq]=87?filters[khotab-al-jomaa-doc-cats][title][$eq]=khotab-docs&locale=fa-IR'
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
          }) 
    }
  
});
}
  
}