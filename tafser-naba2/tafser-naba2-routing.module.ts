import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserNaba2Page } from './tafser-naba2.page';

const routes: Routes = [
  {
    path: '',
    component: TafserNaba2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserNaba2PageRoutingModule {}
