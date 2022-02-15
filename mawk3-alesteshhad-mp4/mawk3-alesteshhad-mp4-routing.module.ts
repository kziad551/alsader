import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Mawk3AlesteshhadMp4Page } from './mawk3-alesteshhad-mp4.page';

const routes: Routes = [
  {
    path: '',
    component: Mawk3AlesteshhadMp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mawk3AlesteshhadMp4PageRoutingModule {}
