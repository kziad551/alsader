import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserTakasurPage } from './tafser-takasur.page';

const routes: Routes = [
  {
    path: '',
    component: TafserTakasurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserTakasurPageRoutingModule {}
