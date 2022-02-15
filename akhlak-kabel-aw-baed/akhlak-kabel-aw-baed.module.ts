import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AkhlakKabelAwBaedPage } from './akhlak-kabel-aw-baed.page';

const routes: Routes = [
  {
    path: '',
    component: AkhlakKabelAwBaedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AkhlakKabelAwBaedPage]
})
export class AkhlakKabelAwBaedPageModule {}
