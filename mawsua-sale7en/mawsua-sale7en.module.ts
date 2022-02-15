import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaSale7enPage } from './mawsua-sale7en.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaSale7enPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaSale7enPage]
})
export class MawsuaSale7enPageModule {}
