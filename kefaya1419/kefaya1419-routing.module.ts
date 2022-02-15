import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419Page } from './kefaya1419.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419PageRoutingModule {}
