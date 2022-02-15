import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaKetablelbay3Page } from './mawsua-ketablelbay3.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaKetablelbay3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaKetablelbay3Page]
})
export class MawsuaKetablelbay3PageModule {}
