import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedMp3Page } from './khotabalsayed-mp3.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedMp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedMp3PageRoutingModule {}
