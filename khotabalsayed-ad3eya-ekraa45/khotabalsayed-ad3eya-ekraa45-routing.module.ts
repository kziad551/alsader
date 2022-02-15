import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa45Page } from './khotabalsayed-ad3eya-ekraa45.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa45Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa45PageRoutingModule {}
