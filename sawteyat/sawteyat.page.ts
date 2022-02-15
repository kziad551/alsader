import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-sawteyat',
  templateUrl: './sawteyat.page.html',
  styleUrls: ['./sawteyat.page.scss'],
})
export class SawteyatPage implements OnInit {

  constructor(private router: Router,private popoverCtrl: PopoverController,private popoverController: PopoverController) { }
 
    moveToPage(pageName) {
      this.router.navigate([pageName]);
     }
   
  ngOnInit() {
  }
 public buttonClicked: boolean = false; //Whatever you want to initialise it as

    public onButtonClick() {

        this.buttonClicked = !this.buttonClicked;
    }
}
