import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserMa3uztynPage } from './tafser-ma3uztyn.page';

const routes: Routes = [
  {
    path: '',
    component: TafserMa3uztynPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserMa3uztynPageRoutingModule {}
