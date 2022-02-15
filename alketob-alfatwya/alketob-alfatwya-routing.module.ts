import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlketobAlfatwyaPage } from './alketob-alfatwya.page';

const routes: Routes = [
  {
    path: '',
    component: AlketobAlfatwyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlketobAlfatwyaPageRoutingModule {}
