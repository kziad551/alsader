import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mawk3-alesteshhad-mp4',
  templateUrl: './mawk3-alesteshhad-mp4.page.html',
  styleUrls: ['./mawk3-alesteshhad-mp4.page.scss'],
})
export class Mawk3AlesteshhadMp4Page implements OnInit {

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