import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MualafatFatawaWadehaPage } from './mualafat-fatawa-wadeha.page';

const routes: Routes = [
  {
    path: '',
    component: MualafatFatawaWadehaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MualafatFatawaWadehaPageRoutingModule {}
