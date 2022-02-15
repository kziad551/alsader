import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaNazratPage } from './mawsua-nazrat.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaNazratPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaNazratPage]
})
export class MawsuaNazratPageModule {}
