import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419jamadeawalPage } from './kefaya1419jamadeawal.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419jamadeawalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419jamadeawalPageRoutingModule {}
