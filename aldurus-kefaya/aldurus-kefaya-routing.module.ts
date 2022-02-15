import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AldurusKefayaPage } from './aldurus-kefaya.page';

const routes: Routes = [
  {
    path: '',
    component: AldurusKefayaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AldurusKefayaPageRoutingModule {}
