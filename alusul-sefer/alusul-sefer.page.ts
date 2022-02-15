import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-alusul-sefer',
  templateUrl: './alusul-sefer.page.html',
  styleUrls: ['./alusul-sefer.page.scss'],
})
export class AlusulSeferPage implements OnInit {
    forwardshow: boolean = true;
 ngOnInit() {

  }
  
constructor(private storage: Storage,public navCtrl: NavController,private streamingMedia: StreamingMedia,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {
  
 }
    ionViewWillEnter(){
        this.storage.get('page-aldurus').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page-aldurus', 'alusul-sefer');
        this.storage.get('alusul-sefer-mp3').then(link => {
            if(link){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }
    // getlink(link:string){
    //     this.storage.set('khotab-alsayed-mp3', link);
    // }
    forwardLink(){
        this.storage.get('alusul-sefer-mp3').then((link) => {
            var options = {
                bgColor: "#000000",
                bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/الدروسnew-.jpg'),
                bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
                initFullscreen: true, // true is default. iOS only.
                keepAwake: true, // prevents device from sleeping. true is default. Android only.
                successCallback: function() {
                    console.log("Player closed without error.");
                },
                errorCallback: function(errMsg) {
                    console.log("Error! " + errMsg);
                }
            };
            this.streamingMedia.playAudio(link, options);
        });
    }

 streamaudio(url: string){
     this.storage.set('alusul-sefer-mp3', url);
    var options = {
    bgColor: "#000000",
    bgImage: encodeURI('https://alsader.net/wp-content/uploads/2021/04/الدروسnew-.jpg'),
    bgImageScale: "fit", // other valid values: "stretch", "aspectStretch"
    initFullscreen: true, // true is default. iOS only.
    keepAwake: true, // prevents device from sleeping. true is default. Android only.
    successCallback: function() {
      console.log("Player closed without error.");
    },
    errorCallback: function(errMsg) {
      console.log("Error! " + errMsg);
    }
  };
  this.streamingMedia.playAudio(url, options);
            }
  
}
