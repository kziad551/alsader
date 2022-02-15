import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaktabatAlsayedSuwarPage } from './maktabat-alsayed-suwar.page';

const routes: Routes = [
  {
    path: '',
    component: MaktabatAlsayedSuwarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaktabatAlsayedSuwarPageRoutingModule {}
