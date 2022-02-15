import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZekraE7yaaAljamaherPage } from './zekra-e7yaa-aljamaher.page';

const routes: Routes = [
  {
    path: '',
    component: ZekraE7yaaAljamaherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZekraE7yaaAljamaherPageRoutingModule {}
