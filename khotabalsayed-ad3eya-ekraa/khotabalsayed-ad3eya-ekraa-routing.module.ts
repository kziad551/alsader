import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraaPage } from './khotabalsayed-ad3eya-ekraa.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraaPageRoutingModule {}
