import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419zekaadaPage } from './kefaya1419zekaada.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419zekaadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419zekaadaPageRoutingModule {}
