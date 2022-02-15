import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulJamadeAwalPage } from './alusul-jamade-awal.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulJamadeAwalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulJamadeAwalPageRoutingModule {}
