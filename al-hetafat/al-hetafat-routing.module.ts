import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlHetafatPage } from './al-hetafat.page';

const routes: Routes = [
  {
    path: '',
    component: AlHetafatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlHetafatPageRoutingModule {}
