import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
@Component({
  selector: 'app-arshefketabe',
  templateUrl: './arshefketabe.page.html',
  styleUrls: ['./arshefketabe.page.scss'],
})
export class ArshefketabePage implements OnInit {

  constructor(private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController) { }
  
    moveToPage(pageName) {
      this.router.navigate([pageName]);
     }

  ngOnInit() {
  }

}
