import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlaserPage } from './tafser-alaser.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlaserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlaserPageRoutingModule {}
