import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalatJamaaPage } from './salat-jamaa.page';

const routes: Routes = [
  {
    path: '',
    component: SalatJamaaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalatJamaaPageRoutingModule {}
