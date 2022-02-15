import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-alusul-akaed',
  templateUrl: './alusul-akaed.page.html',
  styleUrls: ['./alusul-akaed.page.scss'],
})
export class AlusulAkaedPage implements OnInit {
  forwardshow: boolean = true;
  constructor(private storage: Storage,private nativePageTransitions: NativePageTransitions,private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.storage.get('page-aldurus').then(value => {
      this.storage.remove(value);
    });
    this.storage.set('page-aldurus', 'alusul-akaed');
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
