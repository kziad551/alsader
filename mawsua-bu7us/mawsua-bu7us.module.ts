import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaBu7usPage } from './mawsua-bu7us.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaBu7usPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaBu7usPage]
})
export class MawsuaBu7usPageModule {}
