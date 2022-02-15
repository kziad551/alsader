import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-lekaa-hanana-eqra2',
  templateUrl: './lekaa-hanana-eqra2.page.html',
  styleUrls: ['./lekaa-hanana-eqra2.page.scss'],
})
export class LekaaHananaEqra2Page implements OnInit {

  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {   }
  ngOnInit() {
  }

  ionViewWillEnter(){
    this.storage.get('page-lekaat-hanana-eqra2').then(value => {
      this.storage.remove(value);
    });
    this.storage.set('page-lekaat-hanana-eqra2', 'lekaat-ekraa');

  }


  moveToPage(pageName) {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
    }
    this.nativePageTransitions.flip(options);
    this.router.navigate([pageName]);
  }


}
