import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BahesAlkharejPage } from './bahes-alkharej.page';

const routes: Routes = [
  {
    path: '',
    component: BahesAlkharejPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BahesAlkharejPageRoutingModule {}
