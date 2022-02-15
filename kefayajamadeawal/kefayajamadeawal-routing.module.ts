import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayajamadeawalPage } from './kefayajamadeawal.page';

const routes: Routes = [
  {
    path: '',
    component: KefayajamadeawalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayajamadeawalPageRoutingModule {}
