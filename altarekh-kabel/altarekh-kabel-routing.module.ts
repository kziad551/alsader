import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltarekhKabelPage } from './altarekh-kabel.page';

const routes: Routes = [
  {
    path: '',
    component: AltarekhKabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltarekhKabelPageRoutingModule {}
