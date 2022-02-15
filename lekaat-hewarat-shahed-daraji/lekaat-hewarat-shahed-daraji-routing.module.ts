import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaatHewaratShahedDarajiPage } from './lekaat-hewarat-shahed-daraji.page';

const routes: Routes = [
  {
    path: '',
    component: LekaatHewaratShahedDarajiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaatHewaratShahedDarajiPageRoutingModule {}
