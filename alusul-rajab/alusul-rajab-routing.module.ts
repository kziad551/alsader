import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulRajabPage } from './alusul-rajab.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulRajabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulRajabPageRoutingModule {}
