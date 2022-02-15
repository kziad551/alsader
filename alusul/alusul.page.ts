import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-alusul',
  templateUrl: './alusul.page.html',
  styleUrls: ['./alusul.page.scss'],
})

export class AlusulPage implements OnInit {
  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('page-aldurus').then(value => {
      this.storage.remove(value);
    });
    this.storage.set('page-aldurus', 'alusul');
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

