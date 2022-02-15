import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TafseralmaedaPage } from './tafseralmaeda.page';

const routes: Routes = [
  {
    path: '',
    component: TafseralmaedaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TafseralmaedaPage]
})
export class TafseralmaedaPageModule {}
