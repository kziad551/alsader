import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarkadAlsayedImagesPage } from './markad-alsayed-images.page';

const routes: Routes = [
  {
    path: '',
    component: MarkadAlsayedImagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarkadAlsayedImagesPageRoutingModule {}
