import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawezahawaejalnasPage } from './mawezahawaejalnas.page';

const routes: Routes = [
  {
    path: '',
    component: MawezahawaejalnasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawezahawaejalnasPage]
})
export class MawezahawaejalnasPageModule {}
