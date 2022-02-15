import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyatQuraanMp4Page } from './ayat-quraan-mp4.page';

const routes: Routes = [
  {
    path: '',
    component: AyatQuraanMp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyatQuraanMp4PageRoutingModule {}
