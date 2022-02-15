import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Kefaya1419jamadetanePage } from './kefaya1419jamadetane.page';

const routes: Routes = [
  {
    path: '',
    component: Kefaya1419jamadetanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Kefaya1419jamadetanePageRoutingModule {}
