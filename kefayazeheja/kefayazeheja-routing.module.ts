import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayazehejaPage } from './kefayazeheja.page';

const routes: Routes = [
  {
    path: '',
    component: KefayazehejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayazehejaPageRoutingModule {}
