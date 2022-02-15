import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserEnshekakPage } from './tafser-enshekak.page';

const routes: Routes = [
  {
    path: '',
    component: TafserEnshekakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserEnshekakPageRoutingModule {}
