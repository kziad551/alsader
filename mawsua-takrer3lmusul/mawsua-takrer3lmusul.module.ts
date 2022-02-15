import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaTakrer3lmusulPage } from './mawsua-takrer3lmusul.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaTakrer3lmusulPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaTakrer3lmusulPage]
})
export class MawsuaTakrer3lmusulPageModule {}
