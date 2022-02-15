import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZekraSanawyaLelsayedPage } from './zekra-sanawya-lelsayed.page';

const routes: Routes = [
  {
    path: '',
    component: ZekraSanawyaLelsayedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZekraSanawyaLelsayedPageRoutingModule {}
