import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaaHananaEqra2J4Page } from './lekaa-hanana-eqra2-j4.page';

const routes: Routes = [
  {
    path: '',
    component: LekaaHananaEqra2J4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaaHananaEqra2J4PageRoutingModule {}
