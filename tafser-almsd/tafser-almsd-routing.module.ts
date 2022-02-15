import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlmsdPage } from './tafser-almsd.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlmsdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlmsdPageRoutingModule {}
