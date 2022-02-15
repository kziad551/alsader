import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulJamadeTane1419Page } from './alusul-jamade-tane1419.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulJamadeTane1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulJamadeTane1419PageRoutingModule {}
