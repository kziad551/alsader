import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeraAlZateyaPage } from './sera-al-zateya.page';

const routes: Routes = [
  {
    path: '',
    component: SeraAlZateyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeraAlZateyaPageRoutingModule {}
