import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1418Page } from './kefaya1418.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1418Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1418PageRoutingModule {}
