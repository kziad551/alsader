import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayazekaadaPage } from './kefayazekaada.page';

const routes: Routes = [
  {
    path: '',
    component: KefayazekaadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayazekaadaPageRoutingModule {}
