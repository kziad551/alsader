import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulZelka3da1419Page } from './alusul-zelka3da1419.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulZelka3da1419Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulZelka3da1419PageRoutingModule {}
