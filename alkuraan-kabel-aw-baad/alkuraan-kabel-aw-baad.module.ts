import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlkuraanKabelAwBaadPage } from './alkuraan-kabel-aw-baad.page';

const routes: Routes = [
  {
    path: '',
    component: AlkuraanKabelAwBaadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlkuraanKabelAwBaadPage]
})
export class AlkuraanKabelAwBaadPageModule {}
