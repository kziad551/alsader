import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlkutobAlfekheyaKabelPage } from './alkutob-alfekheya-kabel.page';

const routes: Routes = [
  {
    path: '',
    component: AlkutobAlfekheyaKabelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlkutobAlfekheyaKabelPage]
})
export class AlkutobAlfekheyaKabelPageModule {}
