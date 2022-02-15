import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlhamzaPage } from './tafser-alhamza.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlhamzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlhamzaPageRoutingModule {}
