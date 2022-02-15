import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HayaatTurathPage } from './hayaat-turath.page';

const routes: Routes = [
  {
    path: '',
    component: HayaatTurathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HayaatTurathPageRoutingModule {}
