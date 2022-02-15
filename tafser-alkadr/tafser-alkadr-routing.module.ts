import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlkadrPage } from './tafser-alkadr.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlkadrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlkadrPageRoutingModule {}
