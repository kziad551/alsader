import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alnajlayn-alshahedayn-mp4',
  templateUrl: './alnajlayn-alshahedayn-mp4.page.html',
  styleUrls: ['./alnajlayn-alshahedayn-mp4.page.scss'],
})
export class AlnajlaynAlshahedaynMp4Page implements OnInit {

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