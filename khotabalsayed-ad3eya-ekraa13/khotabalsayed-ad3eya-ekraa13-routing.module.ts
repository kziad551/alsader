import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa13Page } from './khotabalsayed-ad3eya-ekraa13.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa13PageRoutingModule {}
