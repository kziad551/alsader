import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-adeyat-aljmaa',
  templateUrl: './adeyat-aljmaa.page.html',
  styleUrls: ['./adeyat-aljmaa.page.scss'],
})
export class AdeyatAljmaaPage implements OnInit {
    forwardshow: boolean = true;
 ngOnInit() { 

  }
  
constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions ,public navCtrl: NavController,private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public loadingController: LoadingController) {

 }
    ionViewWillEnter(){
        this.storage.get('page-khotab-alsayed-adeya').then(value => {
            if(value){
                this.forwardshow= false;
            }else{
                this.forwardshow= true;
            }
        });
    }

    forward(){
        this.storage.get('page-khotab-alsayed-adeya').then((val) => {
            let options: NativeTransitionOptions = {
                direction: 'up',
                duration: 500,
            }
            this.nativePageTransitions.flip(options);
            this.router.navigate([val]);
            console.log(val);
        });

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

