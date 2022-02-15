import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa43Page } from './khotabalsayed-ad3eya-ekraa43.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa43Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa43PageRoutingModule {}
