import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MuhadarahawlalmawezaPage } from './muhadarahawlalmaweza.page';

const routes: Routes = [
  {
    path: '',
    component: MuhadarahawlalmawezaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MuhadarahawlalmawezaPage]
})
export class MuhadarahawlalmawezaPageModule {}
