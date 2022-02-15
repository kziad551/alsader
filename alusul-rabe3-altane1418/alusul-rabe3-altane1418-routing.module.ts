import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulRabe3Altane1418Page } from './alusul-rabe3-altane1418.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulRabe3Altane1418Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulRabe3Altane1418PageRoutingModule {}
