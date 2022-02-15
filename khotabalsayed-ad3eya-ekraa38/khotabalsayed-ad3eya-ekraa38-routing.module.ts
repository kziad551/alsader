import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa38Page } from './khotabalsayed-ad3eya-ekraa38.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa38Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa38PageRoutingModule {}
