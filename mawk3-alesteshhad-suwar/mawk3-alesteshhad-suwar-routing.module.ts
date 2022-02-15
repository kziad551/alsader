import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mawk3AlesteshhadSuwarPage } from './mawk3-alesteshhad-suwar.page';

const routes: Routes = [
  {
    path: '',
    component: Mawk3AlesteshhadSuwarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mawk3AlesteshhadSuwarPageRoutingModule {}
