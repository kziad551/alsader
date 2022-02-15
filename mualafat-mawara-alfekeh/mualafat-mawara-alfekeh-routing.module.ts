import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MualafatMawaraAlfekehPage } from './mualafat-mawara-alfekeh.page';

const routes: Routes = [
  {
    path: '',
    component: MualafatMawaraAlfekehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MualafatMawaraAlfekehPageRoutingModule {}
