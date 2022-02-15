import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MualafatKetabBay3Page } from './mualafat-ketab-bay3.page';

const routes: Routes = [
  {
    path: '',
    component: MualafatKetabBay3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MualafatKetabBay3PageRoutingModule {}
