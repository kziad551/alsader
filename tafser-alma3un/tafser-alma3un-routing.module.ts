import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAlma3unPage } from './tafser-alma3un.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAlma3unPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAlma3unPageRoutingModule {}
