import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlkutobAkaedeyaBaedPage } from './alkutob-akaedeya-baed.page';

const routes: Routes = [
  {
    path: '',
    component: AlkutobAkaedeyaBaedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlkutobAkaedeyaBaedPageRoutingModule {}
