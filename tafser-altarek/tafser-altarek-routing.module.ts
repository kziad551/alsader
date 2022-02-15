import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAltarekPage } from './tafser-altarek.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAltarekPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAltarekPageRoutingModule {}
