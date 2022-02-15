import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlfelPage } from './tafser-alfel.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlfelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlfelPageRoutingModule {}
