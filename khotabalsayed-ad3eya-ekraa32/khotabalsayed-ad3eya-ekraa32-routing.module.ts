import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa32Page } from './khotabalsayed-ad3eya-ekraa32.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa32Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa32PageRoutingModule {}
