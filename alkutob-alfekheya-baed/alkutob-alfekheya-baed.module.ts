import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlkutobAlfekheyaBaedPage } from './alkutob-alfekheya-baed.page';

const routes: Routes = [
  {
    path: '',
    component: AlkutobAlfekheyaBaedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlkutobAlfekheyaBaedPage]
})
export class AlkutobAlfekheyaBaedPageModule {}
