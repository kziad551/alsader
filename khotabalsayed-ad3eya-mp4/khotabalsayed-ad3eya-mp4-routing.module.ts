import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaMp4Page } from './khotabalsayed-ad3eya-mp4.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaMp4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaMp4PageRoutingModule {}
