import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-al3ulum-kabel-aw-baad',
  templateUrl: './al3ulum-kabel-aw-baad.page.html',
  styleUrls: ['./al3ulum-kabel-aw-baad.page.scss'],
})
export class Al3ulumKabelAwBaadPage implements OnInit {
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
