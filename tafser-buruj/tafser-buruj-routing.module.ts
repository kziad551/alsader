import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserBurujPage } from './tafser-buruj.page';

const routes: Routes = [
  {
    path: '',
    component: TafserBurujPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserBurujPageRoutingModule {}
