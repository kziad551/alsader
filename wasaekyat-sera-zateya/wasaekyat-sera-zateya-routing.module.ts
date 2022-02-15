import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WasaekyatSeraZateyaPage } from './wasaekyat-sera-zateya.page';

const routes: Routes = [
  {
    path: '',
    component: WasaekyatSeraZateyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WasaekyatSeraZateyaPageRoutingModule {}
