import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaMenatmenanPage } from './mawsua-menatmenan.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaMenatmenanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaMenatmenanPage]
})
export class MawsuaMenatmenanPageModule {}
