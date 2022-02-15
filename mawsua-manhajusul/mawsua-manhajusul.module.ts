import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaManhajusulPage } from './mawsua-manhajusul.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaManhajusulPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaManhajusulPage]
})
export class MawsuaManhajusulPageModule {}
