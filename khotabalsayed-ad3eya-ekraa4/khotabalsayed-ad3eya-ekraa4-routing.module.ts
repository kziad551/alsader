import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa4Page } from './khotabalsayed-ad3eya-ekraa4.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa4PageRoutingModule {}
