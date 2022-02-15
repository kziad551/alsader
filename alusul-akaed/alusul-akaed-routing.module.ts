import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulAkaedPage } from './alusul-akaed.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulAkaedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulAkaedPageRoutingModule {}
