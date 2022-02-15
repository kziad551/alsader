import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulRabe3Alawal1417Page } from './alusul-rabe3-alawal1417.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulRabe3Alawal1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulRabe3Alawal1417PageRoutingModule {}
