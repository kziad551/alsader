import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayajamadetanePage } from './kefayajamadetane.page';

const routes: Routes = [
  {
    path: '',
    component: KefayajamadetanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayajamadetanePageRoutingModule {}
