import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaEkraa24Page } from './khotabalsayed-ad3eya-ekraa24.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaEkraa24Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaEkraa24PageRoutingModule {}
