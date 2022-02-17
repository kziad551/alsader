import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-al-latmeyat-mp3',
  templateUrl: './al-latmeyat-mp3.page.html',
  styleUrls: ['./al-latmeyat-mp3.page.scss'],
})
export class AlLatmeyatMp3Page implements OnInit {
  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];

  forwardshow: boolean = true;
  constructor(private http: HttpClient,private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  }
  ngOnInit() {
    this.storage.get('language-usingg').then(linkd => {
   //console.log('browser lang',linkd );
   if( linkd == 'ar'){
      //console.log("its eng");
      this.data = [];
      this.content = [];
      const url= 'https://strapi.alsader.net/api/khotab-al-jomaas?filters[khotab_al_jomaa_category][title][$eq]=khotabjmaa-latmyat-mp3&locale=ar-IQ'
      this.http.get(url).subscribe((res)=>{
        this.data = res
        var i =0;
        for ( i=0; i< this.data.data.length; i++ ) {
         var array =[];
         array["title"] = this.data.data[i].attributes.title;
         array["link"] = this.data.data[i].attributes.link;
         this.content.push(array);      
        }
      }) 
    }
    else if( linkd == 'en'){
      this.data = [];
      this.content = [];
      const url= 'https://strapi.alsader.net/api/khotab-al-jomaas?filters[khotab_al_jomaa_category][title][$eq]=khotabjmaa-latmyat-mp3&locale=en'
      this.http.get(url).subscribe((res)=>{
        this.data = res
        var i =0;
        for ( i=0; i< this.data.data.length; i++ ) {
         var array =[];
         array["title"] = this.data.data[i].attributes.title;
         array["link"] = this.data.data[i].attributes.link;
         this.content.push(array);      
        }
      }) 
    }
    else if( linkd == 'farsi'){
      this.data = [];
      this.content = [];
      const url= 'https://strapi.alsader.net/api/khotab-al-jomaas?filters[khotab_al_jomaa_category][title][$eq]=khotabjmaa-latmyat-mp3&locale=fa-IR'
      this.http.get(url).subscribe((res)=>{
        this.data = res
        var i =0;
        for ( i=0; i< this.data.data.length; i++ ) {
         var array =[];
         array["title"] = this.data.data[i].attributes.title;
         array["link"] = this.data.data[i].attributes.link;
         this.content.push(array);      
        }
      }) 
    }

});
  }
 

  streamaudio(url: string){
    var options = {
      bgColor: "#000000",
      bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/خطبةnew-.jpg'),
      bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
      initFullscreen: true, // true is default. iOS only.
      keepAwake: true, // prevents device from sleeping. true is default. Android only.
      successCallback: function() {
        console.log("Player closed without error.");
      },
      errorCallback: function(errMsg) {
        console.log("Error! " + errMsg);
      }
    };
    this.streamingMedia.playAudio(url, options);
  }

}
