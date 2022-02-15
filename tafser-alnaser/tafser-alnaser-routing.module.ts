import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlnaserPage } from './tafser-alnaser.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlnaserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlnaserPageRoutingModule {}
