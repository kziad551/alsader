import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaktabatAlsayedMp4Page } from './maktabat-alsayed-mp4.page';

const routes: Routes = [
  {
    path: '',
    component: MaktabatAlsayedMp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaktabatAlsayedMp4PageRoutingModule {}
