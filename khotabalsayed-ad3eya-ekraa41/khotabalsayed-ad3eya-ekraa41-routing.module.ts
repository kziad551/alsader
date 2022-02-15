import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa41Page } from './khotabalsayed-ad3eya-ekraa41.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa41Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa41PageRoutingModule {}
