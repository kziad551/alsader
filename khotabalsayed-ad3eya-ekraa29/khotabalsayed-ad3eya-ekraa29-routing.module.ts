import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa29Page } from './khotabalsayed-ad3eya-ekraa29.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa29Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa29PageRoutingModule {}
