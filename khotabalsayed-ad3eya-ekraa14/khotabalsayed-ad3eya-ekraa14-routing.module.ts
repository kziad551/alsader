import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa14Page } from './khotabalsayed-ad3eya-ekraa14.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa14Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa14PageRoutingModule {}
