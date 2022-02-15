import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlnajlaynAlshahedaynEqra2Mu2melPage } from './alnajlayn-alshahedayn-eqra2-mu2mel.page';

const routes: Routes = [
  {
    path: '',
    component: AlnajlaynAlshahedaynEqra2Mu2melPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlnajlaynAlshahedaynEqra2Mu2melPageRoutingModule {}
