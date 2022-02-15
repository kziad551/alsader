import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlkutobAlfekheyaKabelAwBaedPage } from './alkutob-alfekheya-kabel-aw-baed.page';

const routes: Routes = [
  {
    path: '',
    component: AlkutobAlfekheyaKabelAwBaedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlkutobAlfekheyaKabelAwBaedPage]
})
export class AlkutobAlfekheyaKabelAwBaedPageModule {}
