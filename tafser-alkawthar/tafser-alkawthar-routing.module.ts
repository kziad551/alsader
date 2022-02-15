import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlkawtharPage } from './tafser-alkawthar.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlkawtharPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlkawtharPageRoutingModule {}
