import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MualafatManhajSalehenPage } from './mualafat-manhaj-salehen.page';

const routes: Routes = [
  {
    path: '',
    component: MualafatManhajSalehenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MualafatManhajSalehenPageRoutingModule {}
