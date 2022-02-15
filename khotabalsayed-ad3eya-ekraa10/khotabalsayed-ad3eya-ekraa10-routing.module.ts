import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa10Page } from './khotabalsayed-ad3eya-ekraa10.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa10PageRoutingModule {}
