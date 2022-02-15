import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulJamadeTane1417Page } from './alusul-jamade-tane1417.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulJamadeTane1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulJamadeTane1417PageRoutingModule {}
