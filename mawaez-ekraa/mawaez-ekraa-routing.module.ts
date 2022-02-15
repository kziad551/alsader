import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MawaezEkraaPage } from './mawaez-ekraa.page';

const routes: Routes = [
  {
    path: '',
    component: MawaezEkraaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MawaezEkraaPageRoutingModule {}
