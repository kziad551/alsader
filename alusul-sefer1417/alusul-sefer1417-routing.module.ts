import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulSefer1417Page } from './alusul-sefer1417.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulSefer1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulSefer1417PageRoutingModule {}
