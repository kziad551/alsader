import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakreratKabelPage } from './takrerat-kabel.page';

const routes: Routes = [
  {
    path: '',
    component: TakreratKabelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakreratKabelPageRoutingModule {}
