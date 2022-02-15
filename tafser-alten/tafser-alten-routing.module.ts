import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAltenPage } from './tafser-alten.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAltenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAltenPageRoutingModule {}
