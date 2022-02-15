import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa26Page } from './khotabalsayed-ad3eya-ekraa26.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa26Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa26PageRoutingModule {}
