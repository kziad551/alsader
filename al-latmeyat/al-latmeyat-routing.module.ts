import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlLatmeyatPage } from './al-latmeyat.page';

const routes: Routes = [
  {
    path: '',
    component: AlLatmeyatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlLatmeyatPageRoutingModule {}
