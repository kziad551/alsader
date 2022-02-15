import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-lekaat-hewarat-shahed',
  templateUrl: './lekaat-hewarat-shahed.page.html',
  styleUrls: ['./lekaat-hewarat-shahed.page.scss'],
})
export class LekaatHewaratShahedPage implements OnInit {

  forwardshow: boolean = true;

  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,private streamingMedia: StreamingMedia,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {   }
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.set('page-lekaat-hewrat', 'lekaat-hewarat-shahed');
    this.storage.get('lekaat-hewarat-mp4').then(link => {
      if(link){
        this.forwardshow= false;
      }else{
        this.forwardshow= true;
      }
    });
  }
  getlink(link:string){
    this.storage.set('lekaat-hewarat-mp4', link);

  }
  forwardLink(){
    this.storage.get('lekaat-hewarat-mp4').then((link) => {
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
