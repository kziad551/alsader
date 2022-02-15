import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaaHananaEqra2J2Page } from './lekaa-hanana-eqra2-j2.page';

const routes: Routes = [
  {
    path: '',
    component: LekaaHananaEqra2J2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaaHananaEqra2J2PageRoutingModule {}
