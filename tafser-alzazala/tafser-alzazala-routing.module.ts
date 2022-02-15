import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlzazalaPage } from './tafser-alzazala.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlzazalaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlzazalaPageRoutingModule {}
