import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419seferPage } from './kefaya1419sefer.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419seferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419seferPageRoutingModule {}
