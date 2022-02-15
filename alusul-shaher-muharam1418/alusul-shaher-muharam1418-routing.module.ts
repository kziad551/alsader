import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShaherMuharam1418Page } from './alusul-shaher-muharam1418.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShaherMuharam1418Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShaherMuharam1418PageRoutingModule {}
