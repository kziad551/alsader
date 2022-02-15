import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShaherMuharam1419Page } from './alusul-shaher-muharam1419.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShaherMuharam1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShaherMuharam1419PageRoutingModule {}
