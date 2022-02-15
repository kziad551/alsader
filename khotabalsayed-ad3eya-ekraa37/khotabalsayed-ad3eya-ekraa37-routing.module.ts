import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa37Page } from './khotabalsayed-ad3eya-ekraa37.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa37Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa37PageRoutingModule {}
