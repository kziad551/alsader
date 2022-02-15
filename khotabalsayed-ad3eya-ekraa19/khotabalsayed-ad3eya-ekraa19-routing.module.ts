import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa19Page } from './khotabalsayed-ad3eya-ekraa19.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa19Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa19PageRoutingModule {}
