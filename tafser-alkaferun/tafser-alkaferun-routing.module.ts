import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlkaferunPage } from './tafser-alkaferun.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlkaferunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlkaferunPageRoutingModule {}
