import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlkuraanBaadPage } from './alkuraan-baad.page';

const routes: Routes = [
  {
    path: '',
    component: AlkuraanBaadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlkuraanBaadPageRoutingModule {}
