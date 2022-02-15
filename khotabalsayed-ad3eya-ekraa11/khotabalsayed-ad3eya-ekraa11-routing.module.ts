import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa11Page } from './khotabalsayed-ad3eya-ekraa11.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa11PageRoutingModule {}
