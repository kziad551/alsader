import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserEsra2Page } from './tafser-esra2.page';

const routes: Routes = [
  {
    path: '',
    component: TafserEsra2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserEsra2PageRoutingModule {}
