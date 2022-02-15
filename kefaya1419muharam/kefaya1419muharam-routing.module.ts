import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419muharamPage } from './kefaya1419muharam.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419muharamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419muharamPageRoutingModule {}
