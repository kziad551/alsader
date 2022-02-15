import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { ThemeService } from './theme.service';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import {Location} from "@angular/common";

const themes = {

  autumn: {
    primary: '#F78154',
    secondary: '#4D9078',
    tertiary: '#B4436C',
    light: '#FDE8DF',
    medium: '#FCD0A2',
    dark: '#B89876'
  },
  night: {
    primary: '#8CBA80',
    secondary: '#FCFF6C',
    tertiary: '#FE5F55',
    medium: '#BCC2C7',
    dark: '#F7F7FF',
    light: '#495867'
  },
  neon: {
    primary: '#39BFBD',
    secondary: '#4CE0B3',
    tertiary: '#FF5E79',
    light: '#F4EDF2',
    medium: '#B682A5',
    dark: '#34162A'
  }
};

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  showSplash= true;
  ios: boolean;
  android: boolean;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public loadingController: LoadingController,
    private router: Router,
    private popoverController: PopoverController,
    public menuCtrl: MenuController,
    private theme: ThemeService,
    private nativePageTransitions: NativePageTransitions,
    private storage: Storage,
    public alertController: AlertController,
    private translate: TranslateService,
    private location: Location
  ) {
    translate.setDefaultLang('ar');
    this.initializeApp();
    this.ios = platform.is('ios');
    this.android = platform.is('android');
  }
  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 3000);

      this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#131313');
      this.statusBar.overlaysWebView(true);

    });
    this.platform.backButton.subscribe(() => {
      if (window.location.pathname == "/home") {
        navigator['app'].exitApp();
      }
    });

  }
  exitApp(){
    navigator['app'].exitApp();
  }
  switchLanguage(language: string) {
    this.translate.use(language);
  }
  myBackButton(){
    this.location.back();
  }
  clearCache(){
    this.storage.clear();
    this.alertController.create({

      header: 'ملاحضة:',
      subHeader: '',
      message: 'لقد تم مسح الذاكرة يرجى إعادة تشغيل البرنامج',
      buttons: ['نعم']
    }).then(res => {
      res.present();

    });
  }


  onClick(event){
   let systemDark = window.matchMedia("(prefers-color-scheme: dark)");
   systemDark.addListener(this.colorTest);
   if(event.detail.checked){
     document.body.setAttribute('data-theme', 'dark');
   }
   else{
     document.body.setAttribute('data-theme', 'light');
   }
 }
 color(){

 }


  onChange($event){
    this.translate.use($event.target.value);
  }
  colorTest(systemInitiatedDark) {
   if (systemInitiatedDark.matches) {
     document.body.setAttribute('data-theme', 'dark');
   } else {
     document.body.setAttribute('data-theme', 'light');
   }
 }

  async moveToPage(pageName) {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 500,
    }
    this.nativePageTransitions.flip(options);
    this.router.navigate([pageName]);
    this.menuCtrl.toggle();
   }




}
