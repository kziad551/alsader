import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltarekhBa3dPage } from './altarekh-ba3d.page';

const routes: Routes = [
  {
    path: '',
    component: AltarekhBa3dPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltarekhBa3dPageRoutingModule {}
