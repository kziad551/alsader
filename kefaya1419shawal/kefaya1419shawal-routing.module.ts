import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419shawalPage } from './kefaya1419shawal.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419shawalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419shawalPageRoutingModule {}
