import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmarNovoNumeroPageRoutingModule } from './confirmar-novo-numero-routing.module';

import { ConfirmarNovoNumeroPage } from './confirmar-novo-numero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmarNovoNumeroPageRoutingModule
  ],
  declarations: [ConfirmarNovoNumeroPage]
})
export class ConfirmarNovoNumeroPageModule {}
