import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa6Page } from './khotabalsayed-ad3eya-ekraa6.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa6PageRoutingModule {}
