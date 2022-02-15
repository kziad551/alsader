import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alusul1418Page } from './alusul1418.page';

const routes: Routes = [
  {
    path: '',
    component: Alusul1418Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alusul1418PageRoutingModule {}
