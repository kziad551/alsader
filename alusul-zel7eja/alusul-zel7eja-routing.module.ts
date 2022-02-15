import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulZel7ejaPage } from './alusul-zel7eja.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulZel7ejaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulZel7ejaPageRoutingModule {}
