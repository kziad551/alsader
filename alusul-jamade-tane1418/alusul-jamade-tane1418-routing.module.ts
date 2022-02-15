import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulJamadeTane1418Page } from './alusul-jamade-tane1418.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulJamadeTane1418Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulJamadeTane1418PageRoutingModule {}
