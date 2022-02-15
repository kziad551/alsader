import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MualafatMawaraAlfekehPageRoutingModule } from './mualafat-mawara-alfekeh-routing.module';

import { MualafatMawaraAlfekehPage } from './mualafat-mawara-alfekeh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MualafatMawaraAlfekehPageRoutingModule
  ],
  declarations: [MualafatMawaraAlfekehPage]
})
export class MualafatMawaraAlfekehPageModule {}
