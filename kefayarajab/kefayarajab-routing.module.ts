import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayarajabPage } from './kefayarajab.page';

const routes: Routes = [
  {
    path: '',
    component: KefayarajabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayarajabPageRoutingModule {}
