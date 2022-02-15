import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlnajlaynAlshahedaynEqra2MustafaPage } from './alnajlayn-alshahedayn-eqra2-mustafa.page';

const routes: Routes = [
  {
    path: '',
    component: AlnajlaynAlshahedaynEqra2MustafaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlnajlaynAlshahedaynEqra2MustafaPageRoutingModule {}
