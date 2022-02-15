import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlmathafShahedPage } from './almathaf-shahed.page';

const routes: Routes = [
  {
    path: '',
    component: AlmathafShahedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlmathafShahedPageRoutingModule {}
