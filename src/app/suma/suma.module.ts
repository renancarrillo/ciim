import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumaPageRoutingModule } from './suma-routing.module';

import { SumaPage } from './suma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumaPageRoutingModule
  ],
  declarations: [SumaPage]
})
export class SumaPageModule {}
