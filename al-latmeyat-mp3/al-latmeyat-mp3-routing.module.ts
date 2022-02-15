import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlLatmeyatMp3Page } from './al-latmeyat-mp3.page';

const routes: Routes = [
  {
    path: '',
    component: AlLatmeyatMp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlLatmeyatMp3PageRoutingModule {}
