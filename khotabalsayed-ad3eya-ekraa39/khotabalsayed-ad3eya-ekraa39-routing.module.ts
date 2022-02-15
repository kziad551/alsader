import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa39Page } from './khotabalsayed-ad3eya-ekraa39.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa39Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa39PageRoutingModule {}
