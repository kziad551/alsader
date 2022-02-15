import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserPage } from './tafser.page';

const routes: Routes = [
  {
    path: '',
    component: TafserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserPageRoutingModule {}
