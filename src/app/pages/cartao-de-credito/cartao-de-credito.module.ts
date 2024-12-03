import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaoDeCreditoPageRoutingModule } from './cartao-de-credito-routing.module';

import { CartaoDeCreditoPage } from './cartao-de-credito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaoDeCreditoPageRoutingModule
  ],
  declarations: [CartaoDeCreditoPage]
})
export class CartaoDeCreditoPageModule {}
