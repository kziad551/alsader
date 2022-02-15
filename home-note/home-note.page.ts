import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-note',
  templateUrl: './home-note.page.html',
  styleUrls: ['./home-note.page.scss'],

})
export class HomeNotePage implements OnInit {
  constructor(private translate: TranslateService,private storage: Storage,private nativePageTransitions: NativePageTransitions,public platform: Platform,private router: Router)  {
    translate.setDefaultLang('ar');
  }
  ngOnInit() {
  }
  moveToPage(pageName) {

      let audio: HTMLAudioElement = new Audio('https://alsader.net/wp-content/uploads/2021/07/intro-app.mp3');
      audio.play();

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
