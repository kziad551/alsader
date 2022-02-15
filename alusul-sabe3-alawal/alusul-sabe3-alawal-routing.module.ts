import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulSabe3AlawalPage } from './alusul-sabe3-alawal.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulSabe3AlawalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulSabe3AlawalPageRoutingModule {}
