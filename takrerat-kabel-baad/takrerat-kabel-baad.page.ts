import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
@Component({
  selector: 'app-takrerat-kabel-baad',
  templateUrl: './takrerat-kabel-baad.page.html',
  styleUrls: ['./takrerat-kabel-baad.page.scss'],
})
export class TakreratKabelBaadPage implements OnInit {

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
