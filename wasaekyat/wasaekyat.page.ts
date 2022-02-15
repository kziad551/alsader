import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-wasaekyat',
  templateUrl: './wasaekyat.page.html',
  styleUrls: ['./wasaekyat.page.scss'],
})
export class WasaekyatPage implements OnInit {
  ngOnInit() {
  }
  constructor(private nativePageTransitions: NativePageTransitions,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController) {
  }
  moveToPage(pageName) {
  setTimeout( () => {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400,
    }
    this.nativePageTransitions.flip(options);
    this.router.navigate([pageName]);
  }, 350);

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
