import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlfajerPage } from './tafser-alfajer.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlfajerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlfajerPageRoutingModule {}
