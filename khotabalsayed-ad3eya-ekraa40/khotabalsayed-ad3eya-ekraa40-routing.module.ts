import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa40Page } from './khotabalsayed-ad3eya-ekraa40.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa40Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa40PageRoutingModule {}
