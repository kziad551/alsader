import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulZelka3daPage } from './alusul-zelka3da.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulZelka3daPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulZelka3daPageRoutingModule {}
