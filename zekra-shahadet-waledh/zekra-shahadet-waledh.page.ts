import { Component, OnInit } from '@angular/core';
import {Storage} from "@ionic/storage";
import {NativePageTransitions, NativeTransitionOptions} from "@ionic-native/native-page-transitions/ngx";
import {LoadingController, NavController, PopoverController} from "@ionic/angular";
import {StreamingMedia, StreamingVideoOptions} from "@ionic-native/streaming-media/ngx";
import {Router} from "@angular/router";

@Component({
  selector: 'app-zekra-shahadet-waledh',
  templateUrl: './zekra-shahadet-waledh.page.html',
  styleUrls: ['./zekra-shahadet-waledh.page.scss'],
})
export class ZekraShahadetWaledhPage implements OnInit {
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


