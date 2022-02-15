import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserA3laPage } from './tafser-a3la.page';

const routes: Routes = [
  {
    path: '',
    component: TafserA3laPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserA3laPageRoutingModule {}
