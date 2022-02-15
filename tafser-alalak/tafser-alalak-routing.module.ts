import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlalakPage } from './tafser-alalak.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlalakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlalakPageRoutingModule {}
