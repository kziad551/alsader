import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-tafser-alaser',
  templateUrl: './tafser-alaser.page.html',
  styleUrls: ['./tafser-alaser.page.scss'],
})
export class TafserAlaserPage implements OnInit {

  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];
  ngOnInit() {
      const url ='https://strapi.alsader.net/api/aduruses?filters[adurus_cat][title][$eq]=mohadarat-tafsir-tafsir-alaser&populate=*'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      var i =0;
      for ( i=0; i< this.data.data.length; i++ ) {
       var array =[];
       array["title"] = this.data.data[i].attributes.title;
       array["link"] = this.data.data[i].attributes.link;
       this.content.push(array);
} });
  }
  forwardshow: boolean = true;
  constructor(private http: HttpClient,private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  }

  ionViewWillEnter(){
    this.storage.get('page-aldurus').then(value => {
      this.storage.remove(value);
    });
    this.storage.set('page-aldurus', 'tafser-alaser');
    this.storage.get('tafser-alaser-mp3').then(link => {
      if(link){
        this.forwardshow= false;
      }else{
        this.forwardshow= true;
      }
    });
  }

  forwardLink(){
    this.storage.get('tafser-alaser-mp3').then((link) => {
      var options = {
        bgColor: "#000000",
        bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/الدروسnew-.jpg'),
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
      this.streamingMedia.playAudio(link, options);
    });
  }
  streamaudio(url: string){
    this.storage.set('tafser-alaser-mp3', url);
    var options = {
      bgColor: "#000000",
      bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/الدروسnew-.jpg'),
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
