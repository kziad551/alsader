import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlejtemaaKabelPage } from './alejtemaa-kabel.page';

const routes: Routes = [
  {
    path: '',
    component: AlejtemaaKabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlejtemaaKabelPageRoutingModule {}
