import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlusulBaedPage } from './alusul-baed.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulBaedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlusulBaedPage]
})
export class AlusulBaedPageModule {}
