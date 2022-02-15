import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedQuraanPage } from './khotabalsayed-quraan.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedQuraanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedQuraanPageRoutingModule {}
