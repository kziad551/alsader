import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaFekehakhlakPage } from './mawsua-fekehakhlak.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaFekehakhlakPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaFekehakhlakPage]
})
export class MawsuaFekehakhlakPageModule {}
