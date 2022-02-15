import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlshare7Page } from './tafser-alshare7.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlshare7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlshare7PageRoutingModule {}
