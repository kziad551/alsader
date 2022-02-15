import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlLatmeyatMp4Page } from './al-latmeyat-mp4.page';

const routes: Routes = [
  {
    path: '',
    component: AlLatmeyatMp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlLatmeyatMp4PageRoutingModule {}
