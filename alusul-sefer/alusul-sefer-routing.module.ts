import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulSeferPage } from './alusul-sefer.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulSeferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulSeferPageRoutingModule {}
