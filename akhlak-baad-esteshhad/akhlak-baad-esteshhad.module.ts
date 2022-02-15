import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AkhlakBaadEsteshhadPage } from './akhlak-baad-esteshhad.page';

const routes: Routes = [
  {
    path: '',
    component: AkhlakBaadEsteshhadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AkhlakBaadEsteshhadPage]
})
export class AkhlakBaadEsteshhadPageModule {}
