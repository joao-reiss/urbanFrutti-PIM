import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormaPagamentoPageRoutingModule } from './forma-pagamento-routing.module';

import { FormaPagamentoPage } from './forma-pagamento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormaPagamentoPageRoutingModule
  ],
  declarations: [FormaPagamentoPage]
})
export class FormaPagamentoPageModule {}
