import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlnajlaynAlshahedaynSuwarPage } from './alnajlayn-alshahedayn-suwar.page';

const routes: Routes = [
  {
    path: '',
    component: AlnajlaynAlshahedaynSuwarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlnajlaynAlshahedaynSuwarPageRoutingModule {}
