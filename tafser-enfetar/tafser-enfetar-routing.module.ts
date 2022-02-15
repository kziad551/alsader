import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserEnfetarPage } from './tafser-enfetar.page';

const routes: Routes = [
  {
    path: '',
    component: TafserEnfetarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserEnfetarPageRoutingModule {}
