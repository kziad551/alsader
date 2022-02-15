import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulRabe3Altane1419Page } from './alusul-rabe3-altane1419.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulRabe3Altane1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulRabe3Altane1419PageRoutingModule {}
