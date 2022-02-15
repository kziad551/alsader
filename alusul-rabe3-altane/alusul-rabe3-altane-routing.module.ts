import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulRabe3AltanePage } from './alusul-rabe3-altane.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulRabe3AltanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulRabe3AltanePageRoutingModule {}
