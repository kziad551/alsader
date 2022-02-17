import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-almathaf-shahed',
  templateUrl: './almathaf-shahed.page.html',
  styleUrls: ['./almathaf-shahed.page.scss'],
})
export class AlmathafShahedPage implements OnInit {

  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];

  constructor(private storage: Storage,private http: HttpClient,private nativePageTransitions: NativePageTransitions,private streamingMedia: StreamingMedia,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {   }
  ngOnInit() {
    this.storage.get('language-usingg').then(linkd => {

      if( linkd == 'ar'){
         this.data = [];
         this.content = [];
         const url= 'https://strapi.alsader.net/api/almathafs?filters[almathaf_cat][title][$eq]=mathaf-barani-mp4&locale=ar-IQ'
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
         const url= 'https://strapi.alsader.net/api/almathafs?filters[almathaf_cat][title][$eq]=mathaf-barani-mp4&locale=en'
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
         const url= 'https://strapi.alsader.net/api/almathafs?filters[almathaf_cat][title][$eq]=mathaf-barani-mp4&locale=fa-IR'
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
    

  
  streamvideo(url: string){
    var options: StreamingVideoOptions = {
      successCallback: () => { console.log('Video played') },
      errorCallback: (e) => { console.log('Error streaming') },
      orientation: 'landscape',
      shouldAutoClose: true,
      controls: true
    };
  
    this.streamingMedia.playVideo(url, options);
    }
      moveToPage(pageName) {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
    }
    this.nativePageTransitions.flip(options);
    this.router.navigate([pageName]);
   }
    

}
