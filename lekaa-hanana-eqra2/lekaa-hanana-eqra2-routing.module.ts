import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaaHananaEqra2Page } from './lekaa-hanana-eqra2.page';

const routes: Routes = [
  {
    path: '',
    component: LekaaHananaEqra2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaaHananaEqra2PageRoutingModule {}
