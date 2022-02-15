import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlHetafatMp4Page } from './al-hetafat-mp4.page';

const routes: Routes = [
  {
    path: '',
    component: AlHetafatMp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlHetafatMp4PageRoutingModule {}
