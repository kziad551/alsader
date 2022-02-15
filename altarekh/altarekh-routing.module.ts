import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltarekhPage } from './altarekh.page';

const routes: Routes = [
  {
    path: '',
    component: AltarekhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltarekhPageRoutingModule {}
