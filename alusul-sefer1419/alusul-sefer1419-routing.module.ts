import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulSefer1419Page } from './alusul-sefer1419.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulSefer1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulSefer1419PageRoutingModule {}
