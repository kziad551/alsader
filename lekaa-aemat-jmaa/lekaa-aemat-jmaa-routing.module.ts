import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaaAematJmaaPage } from './lekaa-aemat-jmaa.page';

const routes: Routes = [
  {
    path: '',
    component: LekaaAematJmaaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaaAematJmaaPageRoutingModule {}
