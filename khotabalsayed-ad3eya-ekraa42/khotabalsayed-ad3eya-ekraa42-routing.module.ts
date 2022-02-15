import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa42Page } from './khotabalsayed-ad3eya-ekraa42.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa42Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa42PageRoutingModule {}
