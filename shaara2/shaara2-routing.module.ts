import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shaara2Page } from './shaara2.page';

const routes: Routes = [
  {
    path: '',
    component: Shaara2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Shaara2PageRoutingModule {}
