import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa21Page } from './khotabalsayed-ad3eya-ekraa21.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa21Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa21PageRoutingModule {}
