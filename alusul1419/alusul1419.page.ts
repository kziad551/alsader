import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-alusul1419',
  templateUrl: './alusul1419.page.html',
  styleUrls: ['./alusul1419.page.scss'],
})
export class Alusul1419Page implements OnInit {

  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {   }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('page-aldurus').then(value => {
      this.storage.remove(value);
    });
    this.storage.set('page-aldurus', 'alusul1419');
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
