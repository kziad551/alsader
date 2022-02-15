import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShaaban1417Page } from './alusul-shaaban1417.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShaaban1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShaaban1417PageRoutingModule {}
