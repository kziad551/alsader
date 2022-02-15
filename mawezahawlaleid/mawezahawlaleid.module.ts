import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawezahawlaleidPage } from './mawezahawlaleid.page';

const routes: Routes = [
  {
    path: '',
    component: MawezahawlaleidPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawezahawlaleidPage]
})
export class MawezahawlaleidPageModule {}
