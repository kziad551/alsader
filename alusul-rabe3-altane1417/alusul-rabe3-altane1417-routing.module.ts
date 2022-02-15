import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulRabe3Altane1417Page } from './alusul-rabe3-altane1417.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulRabe3Altane1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulRabe3Altane1417PageRoutingModule {}
