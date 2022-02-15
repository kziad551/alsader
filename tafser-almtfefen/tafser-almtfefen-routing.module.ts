import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlmtfefenPage } from './tafser-almtfefen.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlmtfefenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlmtfefenPageRoutingModule {}
