import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaatHewaratShahedHananaPage } from './lekaat-hewarat-shahed-hanana.page';

const routes: Routes = [
  {
    path: '',
    component: LekaatHewaratShahedHananaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaatHewaratShahedHananaPageRoutingModule {}
