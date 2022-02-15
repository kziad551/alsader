import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1417Page } from './kefaya1417.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1417PageRoutingModule {}
