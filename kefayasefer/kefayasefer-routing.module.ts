import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayaseferPage } from './kefayasefer.page';

const routes: Routes = [
  {
    path: '',
    component: KefayaseferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayaseferPageRoutingModule {}
