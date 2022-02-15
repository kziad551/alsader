import { Component, OnInit } from '@angular/core';
import { VideoPlayer , VideoOptions } from '@ionic-native/video-player/ngx';
import {DomSanitizer} from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-mareyat',
  templateUrl: './mareyat.page.html',
  styleUrls: ['./mareyat.page.scss'],
})
export class MareyatPage implements OnInit {

  constructor(private VideoPlayer: VideoPlayer,private videoPlayer: VideoPlayer,public  sanitizer:DomSanitizer,
              private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController) { }

   moveToPage(pageName) {
    this.router.navigate([pageName]);
   }

  playVideo(){
    let mainVideo = <HTMLMediaElement>document.getElementById('mainVideo');
    mainVideo.src = "file.mp4";
    mainVideo.play();
 }

  ngOnInit() {
  }
   public buttonClicked: boolean = false; //Whatever you want to initialise it as

    public onButtonClick() {

        this.buttonClicked = !this.buttonClicked;
    }
}
