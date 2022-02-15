import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AldurusTafserPage } from './aldurus-tafser.page';

const routes: Routes = [
  {
    path: '',
    component: AldurusTafserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AldurusTafserPageRoutingModule {}
