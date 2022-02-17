import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { LoadingController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-markad-alsayed-mp4',
  templateUrl: './markad-alsayed-mp4.page.html',
  styleUrls: ['./markad-alsayed-mp4.page.scss'],
})
export class MarkadAlsayedMp4Page implements OnInit {
  forwardshow: boolean = true;
  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];
  constructor(private http: HttpClient,private storage: Storage,private nativePageTransitions: NativePageTransitions ,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {

    
  }

  ngOnInit() {

    this.storage.get('language-usingg').then(linkd => {

      if( linkd == 'ar'){
         this.data = [];
         this.content = [];
         const url= 'https://strapi.alsader.net/api/almarkads?filters[almarkad_cat][title][$eq]=markad-sayed-mp4&locale=ar-IQ'
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
         const url= 'https://strapi.alsader.net/api/almarkads?filters[almarkad_cat][title][$eq]=markad-sayed-mp4&locale=en'
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
         const url= 'https://strapi.alsader.net/api/almarkads?filters[almarkad_cat][title][$eq]=markad-sayed-mp4&locale=fa-IR'
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


  ionViewWillEnter(){
    this.storage.get('page-markad-alsayed').then(value => {
      this.storage.remove(value);
    });
    this.storage.set('page-markad-alsayed', 'kmarkad-alsayed-mp4');
    this.storage.get('markad-alsayed-mp4').then(link => {
      if(link){
        this.forwardshow= false;
      }else{
        this.forwardshow= true;
      }
    });
  }
  getlink(link:string){
    this.storage.set('markad-alsayed-mp4', link);

  }
  forwardLink(){
    this.storage.get('khotab-alsayed-mp4-adeya').then((link) => {
      var options: StreamingVideoOptions = {
        successCallback: () => { console.log('Video played') },
        errorCallback: (e) => { console.log('Error streaming') },
        orientation: 'landscape',
        shouldAutoClose: true,
        controls: true,
      };

      this.streamingMedia.playVideo(link, options);
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
    }, 200);

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


}

