import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AladabEshrakatAdabyaPage } from './aladab-eshrakat-adabya.page';

const routes: Routes = [
  {
    path: '',
    component: AladabEshrakatAdabyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AladabEshrakatAdabyaPageRoutingModule {}
