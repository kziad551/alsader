import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaMp3Page } from './khotabalsayed-ad3eya-mp3.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaMp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaMp3PageRoutingModule {}
