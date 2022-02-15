import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlkuraanKabelPage } from './alkuraan-kabel.page';

const routes: Routes = [
  {
    path: '',
    component: AlkuraanKabelPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlkuraanKabelPage]
})
export class AlkuraanKabelPageModule {}
