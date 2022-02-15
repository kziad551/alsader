import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedSuwarPage } from './khotabalsayed-suwar.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedSuwarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedSuwarPageRoutingModule {}
