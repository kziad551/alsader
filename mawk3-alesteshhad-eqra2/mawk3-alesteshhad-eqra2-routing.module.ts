import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mawk3AlesteshhadEqra2Page } from './mawk3-alesteshhad-eqra2.page';

const routes: Routes = [
  {
    path: '',
    component: Mawk3AlesteshhadEqra2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mawk3AlesteshhadEqra2PageRoutingModule {}
