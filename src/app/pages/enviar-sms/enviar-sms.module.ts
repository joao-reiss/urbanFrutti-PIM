import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviarSmsPageRoutingModule } from './enviar-sms-routing.module';

import { EnviarSmsPage } from './enviar-sms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviarSmsPageRoutingModule
  ],
  declarations: [EnviarSmsPage]
})
export class EnviarSmsPageModule {}
