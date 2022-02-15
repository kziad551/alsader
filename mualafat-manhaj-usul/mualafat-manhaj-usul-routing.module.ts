import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MualafatManhajUsulPage } from './mualafat-manhaj-usul.page';

const routes: Routes = [
  {
    path: '',
    component: MualafatManhajUsulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MualafatManhajUsulPageRoutingModule {}
