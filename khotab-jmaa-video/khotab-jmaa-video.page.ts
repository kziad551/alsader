import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { LoadingController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-khotab-jmaa-video',
  templateUrl: './khotab-jmaa-video.page.html',
  styleUrls: ['./khotab-jmaa-video.page.scss'],
})
export class KhotabJmaaVideoPage implements OnInit {
  forwardshow: boolean = true;
  private data:any = [];
  public title:any[] = [];
  public content:any[] = [];
 ngOnInit() { 

  const url= 'https://strapi.alsader.net/api/khotab-al-jomaas?filters[khotab_al_jomaa_category][title][$eq]=khotob-jmaa-mp4&populate=*'
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
constructor(private http: HttpClient,private videoPlayer: VideoPlayer,private translate: TranslateService,private storage: Storage,private nativePageTransitions: NativePageTransitions ,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
    

 }
    ionViewWillEnter(){
        this.storage.get('page-khotab-alsayed').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page-khotab-alsayed', 'khotab-jmaa-video');
        this.storage.get('khotab-alsayed-mp4').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }
    getlink(link:string){
        this.storage.set('khotab-alsayed-mp4', link);
    }

    forwardLink(){
        this.storage.get('khotab-alsayed-mp4').then((link) => {
            var options: StreamingVideoOptions = {
                successCallback: () => { console.log('Video played') },
                errorCallback: (e) => { console.log('Error streaming') },
                orientation: 'landscape',
                shouldAutoClose: true,
                controls: true
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

