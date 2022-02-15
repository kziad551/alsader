import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlnaze3atPage } from './tafser-alnaze3at.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlnaze3atPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlnaze3atPageRoutingModule {}
