import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAbasPage } from './tafser-abas.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAbasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAbasPageRoutingModule {}
