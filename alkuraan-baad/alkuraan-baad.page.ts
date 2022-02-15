import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-alkuraan-baad',
  templateUrl: './alkuraan-baad.page.html',
  styleUrls: ['./alkuraan-baad.page.scss'],
})
export class AlkuraanBaadPage implements OnInit {

  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {

  }

  ngOnInit() {

  }
  ionViewWillEnter(){
  this.storage.clear();
  this.storage.set('page', 'alkuraan-baad');
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
  }
