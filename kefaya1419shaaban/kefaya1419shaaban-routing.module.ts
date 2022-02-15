import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419shaabanPage } from './kefaya1419shaaban.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419shaabanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419shaabanPageRoutingModule {}
