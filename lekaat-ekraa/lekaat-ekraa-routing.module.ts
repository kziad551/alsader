import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LekaatEkraaPage } from './lekaat-ekraa.page';

const routes: Routes = [
  {
    path: '',
    component: LekaatEkraaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LekaatEkraaPageRoutingModule {}
