import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltercaoSenhaPageRoutingModule } from './altercao-senha-routing.module';

import { AltercaoSenhaPage } from './altercao-senha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltercaoSenhaPageRoutingModule
  ],
  declarations: [AltercaoSenhaPage]
})
export class AltercaoSenhaPageModule {}
