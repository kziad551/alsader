import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MualafatMenaMenanPage } from './mualafat-mena-menan.page';

const routes: Routes = [
  {
    path: '',
    component: MualafatMenaMenanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MualafatMenaMenanPageRoutingModule {}
