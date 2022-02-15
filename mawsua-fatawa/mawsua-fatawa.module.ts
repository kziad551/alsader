import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaFatawaPage } from './mawsua-fatawa.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaFatawaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaFatawaPage]
})
export class MawsuaFatawaPageModule {}
