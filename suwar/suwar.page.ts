import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-suwar',
  templateUrl: './suwar.page.html',
  styleUrls: ['./suwar.page.scss'],
})
export class SuwarPage implements OnInit {

  constructor(private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController,public navCtrl: NavController,private photoViewer: PhotoViewer) { }
  
    moveToPage(pageName) {
      this.router.navigate([pageName]);
     }
   
  ngOnInit() {
  }

}
