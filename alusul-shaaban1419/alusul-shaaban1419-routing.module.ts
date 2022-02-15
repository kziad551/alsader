import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShaaban1419Page } from './alusul-shaaban1419.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShaaban1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShaaban1419PageRoutingModule {}
