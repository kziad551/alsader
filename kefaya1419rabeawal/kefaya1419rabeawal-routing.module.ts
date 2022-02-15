import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419rabeawalPage } from './kefaya1419rabeawal.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419rabeawalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419rabeawalPageRoutingModule {}
