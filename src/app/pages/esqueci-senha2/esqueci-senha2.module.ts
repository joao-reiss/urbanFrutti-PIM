import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsqueciSenha2PageRoutingModule } from './esqueci-senha2-routing.module';

import { EsqueciSenha2Page } from './esqueci-senha2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsqueciSenha2PageRoutingModule
  ],
  declarations: [EsqueciSenha2Page]
})
export class EsqueciSenha2PageModule {}
