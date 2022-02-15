import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alusul1417Page } from './alusul1417.page';

const routes: Routes = [
  {
    path: '',
    component: Alusul1417Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alusul1417PageRoutingModule {}
