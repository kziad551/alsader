import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-khotabalsayed-mp3',
  templateUrl: './khotabalsayed-mp3.page.html',
  styleUrls: ['./khotabalsayed-mp3.page.scss'],
})
export class KhotabalsayedMp3Page implements OnInit {

  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];
    forwardshow: boolean = true;
 ngOnInit() {
  const url= 'https://strapi.alsader.net/api/khotab-al-jomaas?filters[khotab_al_jomaa_category][title][$eq]=khotob-jmaa-mp3&populate=*'
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
  
constructor(private http: HttpClient,private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  
    

     
 }
    ionViewWillEnter(){
        this.storage.get('page-khotab-alsayed').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page-khotab-alsayed', 'khotabalsayed-mp3');
        this.storage.get('khotab-alsayed-mp3').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }
    getlink(link:string){
        this.storage.set('khotab-alsayed-mp3', link);

    }
    forwardLink(){
        this.storage.get('khotab-alsayed-mp3').then((link) => {
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
            this.streamingMedia.playAudio(link, options);
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

