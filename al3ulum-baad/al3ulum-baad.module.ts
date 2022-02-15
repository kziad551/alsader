import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Al3ulumBaadPage } from './al3ulum-baad.page';

const routes: Routes = [
  {
    path: '',
    component: Al3ulumBaadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Al3ulumBaadPage]
})
export class Al3ulumBaadPageModule {}
