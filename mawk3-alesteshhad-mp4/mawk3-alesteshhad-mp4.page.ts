import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http";
import { Storage } from '@ionic/storage'; 


@Component({
  selector: 'app-mawk3-alesteshhad-mp4',
  templateUrl: './mawk3-alesteshhad-mp4.page.html',
  styleUrls: ['./mawk3-alesteshhad-mp4.page.scss'],
})
export class Mawk3AlesteshhadMp4Page implements OnInit {
  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];

  constructor(private storage: Storage,private http: HttpClient,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController) {  
  }
  ngOnInit() {
    this.storage.get('language-usingg').then(linkd => {

      if( linkd == 'ar'){
         this.data = [];
         this.content = [];
         const url= 'https://strapi.alsader.net/api/mwka-esteshhads?filters[mwka_esteshhad_cat][title][$eq]=mwke3-estshhad-mp4&locale=ar-IQ'
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
         const url= 'https://strapi.alsader.net/api/mwka-esteshhads?filters[mwka_esteshhad_cat][title][$eq]=mwke3-estshhad-mp4&locale=en'
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
         const url= 'https://strapi.alsader.net/api/mwka-esteshhads?filters[mwka_esteshhad_cat][title][$eq]=mwke3-estshhad-mp4&locale=fa-IR'
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
    

}