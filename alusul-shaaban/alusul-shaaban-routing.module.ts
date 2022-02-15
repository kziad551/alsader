import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShaabanPage } from './alusul-shaaban.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShaabanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShaabanPageRoutingModule {}
