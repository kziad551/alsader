import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlmathafSuwarPage } from './almathaf-suwar.page';

const routes: Routes = [
  {
    path: '',
    component: AlmathafSuwarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlmathafSuwarPageRoutingModule {}
