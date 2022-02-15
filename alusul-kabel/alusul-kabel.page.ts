import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-alusul-kabel',
  templateUrl: './alusul-kabel.page.html',
  styleUrls: ['./alusul-kabel.page.scss'],
})
export class AlusulKabelPage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {

  }


  ngOnInit() {
   
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
