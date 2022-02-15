import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MawsuaMawaraalfekehPage } from './mawsua-mawaraalfekeh.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuaMawaraalfekehPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MawsuaMawaraalfekehPage]
})
export class MawsuaMawaraalfekehPageModule {}
