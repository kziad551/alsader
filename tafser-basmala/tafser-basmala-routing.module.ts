import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserBasmalaPage } from './tafser-basmala.page';

const routes: Routes = [
  {
    path: '',
    component: TafserBasmalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserBasmalaPageRoutingModule {}
