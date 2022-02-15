import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MualafatFekehAkhlakPage } from './mualafat-fekeh-akhlak.page';

const routes: Routes = [
  {
    path: '',
    component: MualafatFekehAkhlakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MualafatFekehAkhlakPageRoutingModule {}
