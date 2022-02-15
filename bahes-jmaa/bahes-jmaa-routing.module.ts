import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BahesJmaaPage } from './bahes-jmaa.page';

const routes: Routes = [
  {
    path: '',
    component: BahesJmaaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BahesJmaaPageRoutingModule {}
