import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419rabetanePage } from './kefaya1419rabetane.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419rabetanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419rabetanePageRoutingModule {}
