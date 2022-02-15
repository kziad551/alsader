import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulJamadeAwal1418Page } from './alusul-jamade-awal1418.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulJamadeAwal1418Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulJamadeAwal1418PageRoutingModule {}
