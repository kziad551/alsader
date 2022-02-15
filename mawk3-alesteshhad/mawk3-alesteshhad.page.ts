import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-mawk3-alesteshhad',
  templateUrl: './mawk3-alesteshhad.page.html',
  styleUrls: ['./mawk3-alesteshhad.page.scss'],
})
export class Mawk3AlesteshhadPage implements OnInit {
  constructor(private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {   }

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
