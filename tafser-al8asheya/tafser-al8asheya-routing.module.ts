import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TafserAl8asheyaPage } from './tafser-al8asheya.page';

const routes: Routes = [
  {
    path: '',
    component: TafserAl8asheyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TafserAl8asheyaPageRoutingModule {}
