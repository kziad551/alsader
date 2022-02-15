import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShaherMuharamPage } from './alusul-shaher-muharam.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShaherMuharamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShaherMuharamPageRoutingModule {}
