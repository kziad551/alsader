import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZekraShahadetWaledhPage } from './zekra-shahadet-waledh.page';

const routes: Routes = [
  {
    path: '',
    component: ZekraShahadetWaledhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZekraShahadetWaledhPageRoutingModule {}
