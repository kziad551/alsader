import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KefayarabetanePage } from './kefayarabetane.page';

const routes: Routes = [
  {
    path: '',
    component: KefayarabetanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KefayarabetanePageRoutingModule {}
