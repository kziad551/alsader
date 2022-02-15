import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-akhlak-kabel-aw-baed',
  templateUrl: './akhlak-kabel-aw-baed.page.html',
  styleUrls: ['./akhlak-kabel-aw-baed.page.scss'],
})
export class AkhlakKabelAwBaedPage implements OnInit {

  constructor(private nativePageTransitions: NativePageTransitions,private router: Router)  {}

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
