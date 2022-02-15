import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulAkaedShajzratPage } from './alusul-akaed-shajzrat.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulAkaedShajzratPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulAkaedShajzratPageRoutingModule {}
