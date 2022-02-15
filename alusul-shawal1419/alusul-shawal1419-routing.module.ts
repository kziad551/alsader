import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShawal1419Page } from './alusul-shawal1419.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShawal1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShawal1419PageRoutingModule {}
