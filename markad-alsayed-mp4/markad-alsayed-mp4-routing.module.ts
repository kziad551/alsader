import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkadAlsayedMp4Page } from './markad-alsayed-mp4.page';

const routes: Routes = [
  {
    path: '',
    component: MarkadAlsayedMp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkadAlsayedMp4PageRoutingModule {}
