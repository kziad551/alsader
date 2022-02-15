import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakreratKabelBaadPage } from './takrerat-kabel-baad.page';

const routes: Routes = [
  {
    path: '',
    component: TakreratKabelBaadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakreratKabelBaadPageRoutingModule {}
