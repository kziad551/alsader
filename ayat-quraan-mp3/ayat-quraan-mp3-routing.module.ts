import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyatQuraanMp3Page } from './ayat-quraan-mp3.page';

const routes: Routes = [
  {
    path: '',
    component: AyatQuraanMp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyatQuraanMp3PageRoutingModule {}
