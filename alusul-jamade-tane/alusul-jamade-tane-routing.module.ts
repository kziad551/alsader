import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulJamadeTanePage } from './alusul-jamade-tane.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulJamadeTanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulJamadeTanePageRoutingModule {}
