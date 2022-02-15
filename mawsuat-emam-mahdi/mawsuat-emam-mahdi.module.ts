import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MawsuatEmamMahdiPageRoutingModule } from './mawsuat-emam-mahdi-routing.module';

import { MawsuatEmamMahdiPage } from './mawsuat-emam-mahdi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MawsuatEmamMahdiPageRoutingModule
  ],
  declarations: [MawsuatEmamMahdiPage]
})
export class MawsuatEmamMahdiPageModule {}
