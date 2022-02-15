import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AldurusFekehPage } from './aldurus-fekeh.page';

const routes: Routes = [
  {
    path: '',
    component: AldurusFekehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AldurusFekehPageRoutingModule {}
