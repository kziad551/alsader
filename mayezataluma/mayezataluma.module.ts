import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MayezatalumaPage } from './mayezataluma.page';

const routes: Routes = [
  {
    path: '',
    component: MayezatalumaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MayezatalumaPage]
})
export class MayezatalumaPageModule {}
