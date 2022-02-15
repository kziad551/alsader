import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarahelEmaarMarkadPage } from './marahel-emaar-markad.page';

const routes: Routes = [
  {
    path: '',
    component: MarahelEmaarMarkadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarahelEmaarMarkadPageRoutingModule {}
