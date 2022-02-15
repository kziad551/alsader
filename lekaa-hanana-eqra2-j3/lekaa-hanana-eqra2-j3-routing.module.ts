import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaaHananaEqra2J3Page } from './lekaa-hanana-eqra2-j3.page';

const routes: Routes = [
  {
    path: '',
    component: LekaaHananaEqra2J3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaaHananaEqra2J3PageRoutingModule {}
