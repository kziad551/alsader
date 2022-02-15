import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Al3ulumKabelPage } from './al3ulum-kabel.page';

const routes: Routes = [
  {
    path: '',
    component: Al3ulumKabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Al3ulumKabelPageRoutingModule {}
