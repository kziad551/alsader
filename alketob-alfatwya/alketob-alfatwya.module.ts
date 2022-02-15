import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlketobAlfatwyaPageRoutingModule } from './alketob-alfatwya-routing.module';

import { AlketobAlfatwyaPage } from './alketob-alfatwya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlketobAlfatwyaPageRoutingModule
  ],
  declarations: [AlketobAlfatwyaPage]
})
export class AlketobAlfatwyaPageModule {}
