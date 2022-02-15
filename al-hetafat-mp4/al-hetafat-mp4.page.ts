import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { LoadingController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-al-hetafat-mp4',
  templateUrl: './al-hetafat-mp4.page.html',
  styleUrls: ['./al-hetafat-mp4.page.scss'],
})
export class AlHetafatMp4Page implements OnInit {

  forwardshow: boolean = true;
  public title;
  public link;
  public video   = [];

  ngOnInit() {
  }
  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions ,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
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
