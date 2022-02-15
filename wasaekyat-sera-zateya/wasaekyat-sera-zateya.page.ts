import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-wasaekyat-sera-zateya',
  templateUrl: './wasaekyat-sera-zateya.page.html',
  styleUrls: ['./wasaekyat-sera-zateya.page.scss'],
})
export class WasaekyatSeraZateyaPage implements OnInit {
  ngOnInit() {
  }
  constructor(public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController) {
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