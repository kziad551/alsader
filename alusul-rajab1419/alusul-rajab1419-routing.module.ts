import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulRajab1419Page } from './alusul-rajab1419.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulRajab1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulRajab1419PageRoutingModule {}
