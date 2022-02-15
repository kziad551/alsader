import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserEkhlasPage } from './tafser-ekhlas.page';

const routes: Routes = [
  {
    path: '',
    component: TafserEkhlasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserEkhlasPageRoutingModule {}
