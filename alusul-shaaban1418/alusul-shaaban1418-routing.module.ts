import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShaaban1418Page } from './alusul-shaaban1418.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShaaban1418Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShaaban1418PageRoutingModule {}
