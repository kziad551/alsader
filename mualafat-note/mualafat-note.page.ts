import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-mualafat-note',
  templateUrl: './mualafat-note.page.html',
  styleUrls: ['./mualafat-note.page.scss'],
})
export class MualafatNotePage implements OnInit {

  constructor(private translate: TranslateService,private router: Router,private nativePageTransitions: NativePageTransitions  ) {
    translate.setDefaultLang('ar');
  }


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
