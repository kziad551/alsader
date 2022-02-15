import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KabelBaedEsteshhadPage } from './kabel-baed-esteshhad.page';

const routes: Routes = [
  {
    path: '',
    component: KabelBaedEsteshhadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KabelBaedEsteshhadPage]
})
export class KabelBaedEsteshhadPageModule {}
