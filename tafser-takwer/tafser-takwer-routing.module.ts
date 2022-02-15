import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserTakwerPage } from './tafser-takwer.page';

const routes: Routes = [
  {
    path: '',
    component: TafserTakwerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserTakwerPageRoutingModule {}
