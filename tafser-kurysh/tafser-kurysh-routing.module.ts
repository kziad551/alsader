import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserKuryshPage } from './tafser-kurysh.page';

const routes: Routes = [
  {
    path: '',
    component: TafserKuryshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserKuryshPageRoutingModule {}
