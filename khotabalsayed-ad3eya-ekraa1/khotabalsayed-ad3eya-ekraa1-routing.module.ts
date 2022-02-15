import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa1Page } from './khotabalsayed-ad3eya-ekraa1.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa1PageRoutingModule {}
