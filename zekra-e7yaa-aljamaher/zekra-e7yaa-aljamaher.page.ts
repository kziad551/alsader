import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions/ngx";
import {LoadingController, NavController, PopoverController} from "@ionic/angular";
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media/ngx";
import {Router} from "@angular/router";
import { HttpClient } from "@angular/common/http"; 

@Component({
  selector: 'app-zekra-e7yaa-aljamaher',
  templateUrl: './zekra-e7yaa-aljamaher.page.html',
  styleUrls: ['./zekra-e7yaa-aljamaher.page.scss'],
})
export class ZekraE7yaaAljamaherPage implements OnInit {
  
  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];

  ngOnInit() {
    const url= 'https://strapi.alsader.net/api/almarkads?filters[almarkad_cat][title][$eq]=e7ya2-jamahir-mp4&populate=*'
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