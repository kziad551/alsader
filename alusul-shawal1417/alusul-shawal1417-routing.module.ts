import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShawal1417Page } from './alusul-shawal1417.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShawal1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShawal1417PageRoutingModule {}
