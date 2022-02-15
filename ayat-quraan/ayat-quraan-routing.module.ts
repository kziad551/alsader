import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyatQuraanPage } from './ayat-quraan.page';

const routes: Routes = [
  {
    path: '',
    component: AyatQuraanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyatQuraanPageRoutingModule {}
