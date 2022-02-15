import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaatHewaratShahedPage } from './lekaat-hewarat-shahed.page';

const routes: Routes = [
  {
    path: '',
    component: LekaatHewaratShahedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaatHewaratShahedPageRoutingModule {}
