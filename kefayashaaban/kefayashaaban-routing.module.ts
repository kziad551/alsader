import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayashaabanPage } from './kefayashaaban.page';

const routes: Routes = [
  {
    path: '',
    component: KefayashaabanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayashaabanPageRoutingModule {}
