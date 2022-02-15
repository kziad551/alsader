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
  selector: 'app-al-hetafat-mp4',
  templateUrl: './al-hetafat-mp4.page.html',
  styleUrls: ['./al-hetafat-mp4.page.scss'],
})
export class AlHetafatMp4Page implements OnInit {

  forwardshow: boolean = true;
  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];

  ngOnInit() {
    const url= 'https://strapi.alsader.net/api/khotab-al-jomaas?filters[khotab_al_jomaa_category][title][$eq]=khotabjmaa-hitafat-mp4&populate=*'
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
  constructor(private http: HttpClient,private storage: Storage,private nativePageTransitions: NativePageTransitions ,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
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
