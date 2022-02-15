import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulRajab1417Page } from './alusul-rajab1417.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulRajab1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulRajab1417PageRoutingModule {}
