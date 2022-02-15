import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlusulShawalPage } from './alusul-shawal.page';

const routes: Routes = [
  {
    path: '',
    component: AlusulShawalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlusulShawalPageRoutingModule {}
