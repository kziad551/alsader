import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa2Page } from './khotabalsayed-ad3eya-ekraa2.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa2PageRoutingModule {}
