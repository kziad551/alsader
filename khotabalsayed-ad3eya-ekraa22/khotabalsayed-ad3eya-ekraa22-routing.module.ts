import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa22Page } from './khotabalsayed-ad3eya-ekraa22.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa22PageRoutingModule {}
