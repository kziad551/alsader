import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlHetafatMp3Page } from './al-hetafat-mp3.page';

const routes: Routes = [
  {
    path: '',
    component: AlHetafatMp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlHetafatMp3PageRoutingModule {}
