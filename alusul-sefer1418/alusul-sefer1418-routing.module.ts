import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulSefer1418Page } from './alusul-sefer1418.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulSefer1418Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulSefer1418PageRoutingModule {}
