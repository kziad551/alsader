import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-lekaat-ekraa',
  templateUrl: './lekaat-ekraa.page.html',
  styleUrls: ['./lekaat-ekraa.page.scss'],
})
export class LekaatEkraaPage implements OnInit {


    constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {   }
    ngOnInit() {
    }

    ionViewWillEnter(){
        this.storage.get('page-lekaat-hewrat').then(value => {
            this.storage.remove(value);
        });
        this.storage.set('page-lekaat-hewrat', 'lekaat-ekraa');

    }
    // getlink(link:string){
    //     this.storage.set('khotab-alsayed-mp4', link);
    // }
    // forwardLink(){
    //     this.storage.get('khotab-alsayed-mp4').then((link) => {
    //         var options: StreamingVideoOptions = {
    //             successCallback: () => { console.log('Video played') },
    //             errorCallback: (e) => { console.log('Error streaming') },
    //             orientation: 'landscape',
    //             shouldAutoClose: true,
    //             controls: true
    //         };
    //         this.streamingMedia.playVideo(link, options);
    //     });
    // }

        moveToPage(pageName) {
      let options: NativeTransitionOptions = {
        direction: 'up',
        duration: 500,
      }
      this.nativePageTransitions.flip(options);
      this.router.navigate([pageName]);
     }


  }
