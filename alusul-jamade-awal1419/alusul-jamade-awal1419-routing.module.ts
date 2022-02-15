import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulJamadeAwal1419Page } from './alusul-jamade-awal1419.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulJamadeAwal1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulJamadeAwal1419PageRoutingModule {}
