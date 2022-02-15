import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZekraSanawyaLelsayedSuwarPage } from './zekra-sanawya-lelsayed-suwar.page';

const routes: Routes = [
  {
    path: '',
    component: ZekraSanawyaLelsayedSuwarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZekraSanawyaLelsayedSuwarPageRoutingModule {}
