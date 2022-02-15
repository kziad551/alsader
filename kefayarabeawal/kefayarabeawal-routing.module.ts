import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayarabeawalPage } from './kefayarabeawal.page';

const routes: Routes = [
  {
    path: '',
    component: KefayarabeawalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayarabeawalPageRoutingModule {}
