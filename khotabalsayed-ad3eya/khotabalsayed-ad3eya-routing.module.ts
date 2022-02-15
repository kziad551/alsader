import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KhotabalsayedAd3eyaPage } from './khotabalsayed-ad3eya.page';

const routes: Routes = [
  {
    path: '',
    component: KhotabalsayedAd3eyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KhotabalsayedAd3eyaPageRoutingModule {}
