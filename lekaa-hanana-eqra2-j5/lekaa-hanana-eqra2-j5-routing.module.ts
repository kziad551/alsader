import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaaHananaEqra2J5Page } from './lekaa-hanana-eqra2-j5.page';

const routes: Routes = [
  {
    path: '',
    component: LekaaHananaEqra2J5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaaHananaEqra2J5PageRoutingModule {}
