import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigitarNumeroPageRoutingModule } from './digitar-numero-routing.module';

import { DigitarNumeroPage } from './digitar-numero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigitarNumeroPageRoutingModule
  ],
  declarations: [DigitarNumeroPage]
})
export class DigitarNumeroPageModule {}
