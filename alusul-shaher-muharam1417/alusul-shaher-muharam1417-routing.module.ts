import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShaherMuharam1417Page } from './alusul-shaher-muharam1417.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShaherMuharam1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShaherMuharam1417PageRoutingModule {}
