import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LekaatmareyaPage } from './lekaatmareya.page';

const routes: Routes = [
  {
    path: '',
    component: LekaatmareyaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LekaatmareyaPage]
})
export class LekaatmareyaPageModule {}
