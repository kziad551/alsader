import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawezahawldaresPage } from './mawezahawldares.page';

const routes: Routes = [
  {
    path: '',
    component: MawezahawldaresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawezahawldaresPage]
})
export class MawezahawldaresPageModule {}
