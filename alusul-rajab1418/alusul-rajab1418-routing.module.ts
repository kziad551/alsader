import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulRajab1418Page } from './alusul-rajab1418.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulRajab1418Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulRajab1418PageRoutingModule {}
