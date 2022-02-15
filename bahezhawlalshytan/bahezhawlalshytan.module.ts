import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BahezhawlalshytanPage } from './bahezhawlalshytan.page';

const routes: Routes = [
  {
    path: '',
    component: BahezhawlalshytanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BahezhawlalshytanPage]
})
export class BahezhawlalshytanPageModule {}
