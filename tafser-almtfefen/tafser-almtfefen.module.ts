import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TafserAlmtfefenPageRoutingModule } from './tafser-almtfefen-routing.module';

import { TafserAlmtfefenPage } from './tafser-almtfefen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TafserAlmtfefenPageRoutingModule
  ],
  declarations: [TafserAlmtfefenPage]
})
export class TafserAlmtfefenPageModule {}
