import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserBe2aPage } from './tafser-be2a.page';

const routes: Routes = [
  {
    path: '',
    component: TafserBe2aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserBe2aPageRoutingModule {}
