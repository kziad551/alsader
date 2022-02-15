import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-al3ulum-kabel',
  templateUrl: './al3ulum-kabel.page.html',
  styleUrls: ['./al3ulum-kabel.page.scss'],
})
export class Al3ulumKabelPage implements OnInit {

  constructor(private storage: Storage) { }

  ionViewWillEnter(){
    this.storage.clear();
    this.storage.set('page', 'al3ulum-kabel');
  }

  ngOnInit() {
  }

}
