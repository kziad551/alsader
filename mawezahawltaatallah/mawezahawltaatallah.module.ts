import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawezahawltaatallahPage } from './mawezahawltaatallah.page';

const routes: Routes = [
  {
    path: '',
    component: MawezahawltaatallahPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawezahawltaatallahPage]
})
export class MawezahawltaatallahPageModule {}
