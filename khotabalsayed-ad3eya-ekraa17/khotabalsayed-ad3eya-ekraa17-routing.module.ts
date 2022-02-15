import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa17Page } from './khotabalsayed-ad3eya-ekraa17.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa17Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa17PageRoutingModule {}
