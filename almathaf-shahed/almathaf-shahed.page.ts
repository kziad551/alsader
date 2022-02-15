import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-almathaf-shahed',
  templateUrl: './almathaf-shahed.page.html',
  styleUrls: ['./almathaf-shahed.page.scss'],
})
export class AlmathafShahedPage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions,private streamingMedia: StreamingMedia,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {   }
  ngOnInit() {
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
