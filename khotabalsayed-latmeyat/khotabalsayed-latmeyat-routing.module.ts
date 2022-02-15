import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedLatmeyatPage } from './khotabalsayed-latmeyat.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedLatmeyatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedLatmeyatPageRoutingModule {}
