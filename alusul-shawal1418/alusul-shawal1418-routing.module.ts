import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShawal1418Page } from './alusul-shawal1418.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShawal1418Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShawal1418PageRoutingModule {}
