import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AladabEshrakatAdabyaPageRoutingModule } from './aladab-eshrakat-adabya-routing.module';

import { AladabEshrakatAdabyaPage } from './aladab-eshrakat-adabya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AladabEshrakatAdabyaPageRoutingModule
  ],
  declarations: [AladabEshrakatAdabyaPage]
})
export class AladabEshrakatAdabyaPageModule {}
