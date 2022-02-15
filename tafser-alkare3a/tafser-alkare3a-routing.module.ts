import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlkare3aPage } from './tafser-alkare3a.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlkare3aPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlkare3aPageRoutingModule {}
