import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MualafatMasaelWarududPage } from './mualafat-masael-warudud.page';

const routes: Routes = [
  {
    path: '',
    component: MualafatMasaelWarududPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MualafatMasaelWarududPageRoutingModule {}
