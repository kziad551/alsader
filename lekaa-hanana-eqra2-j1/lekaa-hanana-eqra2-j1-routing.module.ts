import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaaHananaEqra2J1Page } from './lekaa-hanana-eqra2-j1.page';

const routes: Routes = [
  {
    path: '',
    component: LekaaHananaEqra2J1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaaHananaEqra2J1PageRoutingModule {}
