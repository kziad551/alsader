import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MawsuatEmamMahdiPage } from './mawsuat-emam-mahdi.page';

const routes: Routes = [
  {
    path: '',
    component: MawsuatEmamMahdiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MawsuatEmamMahdiPageRoutingModule {}
