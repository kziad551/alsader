import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-alkutob-akaedeya-baed',
  templateUrl: './alkutob-akaedeya-baed.page.html',
  styleUrls: ['./alkutob-akaedeya-baed.page.scss'],
})
export class AlkutobAkaedeyaBaedPage implements OnInit {

  constructor(private storage: Storage) { }
  ionViewWillEnter(){
    this.storage.clear();
    this.storage.set('page', 'alkutob-akaedeya-baed');
  }

  ngOnInit() {
  }

}
