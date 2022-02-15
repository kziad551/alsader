import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuhadaratPage } from './muhadarat.page';

const routes: Routes = [
  {
    path: '',
    component: MuhadaratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuhadaratPageRoutingModule {}
