import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAl3adeyatPage } from './tafser-al3adeyat.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAl3adeyatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAl3adeyatPageRoutingModule {}
