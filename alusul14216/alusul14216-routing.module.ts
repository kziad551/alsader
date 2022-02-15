import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Alusul14216Page } from './alusul14216.page';

const routes: Routes = [
  {
    path: '',
    component: Alusul14216Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Alusul14216PageRoutingModule {}
