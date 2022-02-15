import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alusul1415Page } from './alusul1415.page';

const routes: Routes = [
  {
    path: '',
    component: Alusul1415Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alusul1415PageRoutingModule {}
