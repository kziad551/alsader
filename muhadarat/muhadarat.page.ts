import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-muhadarat',
  templateUrl: './muhadarat.page.html',
  styleUrls: ['./muhadarat.page.scss'],
})
export class MuhadaratPage implements OnInit {
  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router){

  }

  ngOnInit() {
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
