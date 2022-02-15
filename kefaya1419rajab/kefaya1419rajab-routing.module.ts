import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419rajabPage } from './kefaya1419rajab.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419rajabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419rajabPageRoutingModule {}
