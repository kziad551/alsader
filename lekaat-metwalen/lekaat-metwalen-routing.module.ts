import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaatMetwalenPage } from './lekaat-metwalen.page';

const routes: Routes = [
  {
    path: '',
    component: LekaatMetwalenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaatMetwalenPageRoutingModule {}
