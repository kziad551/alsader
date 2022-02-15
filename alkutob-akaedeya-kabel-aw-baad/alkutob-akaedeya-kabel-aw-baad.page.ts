import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-alkutob-akaedeya-kabel-aw-baad',
  templateUrl: './alkutob-akaedeya-kabel-aw-baad.page.html',
  styleUrls: ['./alkutob-akaedeya-kabel-aw-baad.page.scss'],
})


export class AlkutobAkaedeyaKabelAwBaadPage implements OnInit {
  constructor(public navCtrl: NavController,private nativePageTransitions: NativePageTransitions,private router: Router)  {
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
