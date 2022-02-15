import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayashawalPage } from './kefayashawal.page';

const routes: Routes = [
  {
    path: '',
    component: KefayashawalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayashawalPageRoutingModule {}
