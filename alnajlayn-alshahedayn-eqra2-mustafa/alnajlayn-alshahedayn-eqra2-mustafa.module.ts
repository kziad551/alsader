import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlnajlaynAlshahedaynEqra2MustafaPageRoutingModule } from './alnajlayn-alshahedayn-eqra2-mustafa-routing.module';

import { AlnajlaynAlshahedaynEqra2MustafaPage } from './alnajlayn-alshahedayn-eqra2-mustafa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlnajlaynAlshahedaynEqra2MustafaPageRoutingModule
  ],
  declarations: [AlnajlaynAlshahedaynEqra2MustafaPage]
})
export class AlnajlaynAlshahedaynEqra2MustafaPageModule {}
