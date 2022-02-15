import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakreratBaadPage } from './takrerat-baad.page';

const routes: Routes = [
  {
    path: '',
    component: TakreratBaadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakreratBaadPageRoutingModule {}
