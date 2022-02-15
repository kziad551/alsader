import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alusul1419Page } from './alusul1419.page';

const routes: Routes = [
  {
    path: '',
    component: Alusul1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alusul1419PageRoutingModule {}
