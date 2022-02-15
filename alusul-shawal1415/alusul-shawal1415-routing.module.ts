import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShawal1415Page } from './alusul-shawal1415.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShawal1415Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShawal1415PageRoutingModule {}
