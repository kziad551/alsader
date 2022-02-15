import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SayedMarkadalamerImgPage } from './sayed-markadalamer-img.page';

const routes: Routes = [
  {
    path: '',
    component: SayedMarkadalamerImgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SayedMarkadalamerImgPageRoutingModule {}
