import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedHetafatPage } from './khotabalsayed-hetafat.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedHetafatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedHetafatPageRoutingModule {}
