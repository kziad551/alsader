import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaaMunawa3aPage } from './mawsuaa-munawa3a.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaaMunawa3aPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaaMunawa3aPage]
})
export class MawsuaaMunawa3aPageModule {}
