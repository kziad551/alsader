import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa44Page } from './khotabalsayed-ad3eya-ekraa44.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa44Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa44PageRoutingModule {}
