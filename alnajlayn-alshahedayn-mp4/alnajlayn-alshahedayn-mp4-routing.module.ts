import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlnajlaynAlshahedaynMp4Page } from './alnajlayn-alshahedayn-mp4.page';

const routes: Routes = [
  {
    path: '',
    component: AlnajlaynAlshahedaynMp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlnajlaynAlshahedaynMp4PageRoutingModule {}
