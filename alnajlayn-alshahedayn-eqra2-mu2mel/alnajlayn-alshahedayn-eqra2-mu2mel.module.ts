import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlnajlaynAlshahedaynEqra2Mu2melPageRoutingModule } from './alnajlayn-alshahedayn-eqra2-mu2mel-routing.module';

import { AlnajlaynAlshahedaynEqra2Mu2melPage } from './alnajlayn-alshahedayn-eqra2-mu2mel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlnajlaynAlshahedaynEqra2Mu2melPageRoutingModule
  ],
  declarations: [AlnajlaynAlshahedaynEqra2Mu2melPage]
})
export class AlnajlaynAlshahedaynEqra2Mu2melPageModule {}
