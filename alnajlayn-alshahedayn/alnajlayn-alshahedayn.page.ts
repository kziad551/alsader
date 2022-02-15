import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Platform } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-alnajlayn-alshahedayn',
  templateUrl: './alnajlayn-alshahedayn.page.html',
  styleUrls: ['./alnajlayn-alshahedayn.page.scss'],
})
export class AlnajlaynAlshahedaynPage implements OnInit {

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
