import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulZel7eja1415Page } from './alusul-zel7eja1415.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulZel7eja1415Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulZel7eja1415PageRoutingModule {}
