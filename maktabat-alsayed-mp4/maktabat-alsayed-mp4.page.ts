import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { NavController } from '@ionic/angular';
import { HttpClient } from "@angular/common/http"; 

@Component({
  selector: 'app-maktabat-alsayed-mp4',
  templateUrl: './maktabat-alsayed-mp4.page.html',
  styleUrls: ['./maktabat-alsayed-mp4.page.scss'],
})
export class MaktabatAlsayedMp4Page implements OnInit {
  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];

  ngOnInit() {
    const url= 'https://strapi.alsader.net/api/almaktabas?filters[almaktaba_cat][title][$eq]=maktaba-khasa-mp4&populate=*'
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
  constructor(private http: HttpClient,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController) {  
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