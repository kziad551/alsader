import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayamuharamPage } from './kefayamuharam.page';

const routes: Routes = [
  {
    path: '',
    component: KefayamuharamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayamuharamPageRoutingModule {}
