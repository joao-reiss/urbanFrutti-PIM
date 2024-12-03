import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaoDeCreditoPage } from './cartao-de-credito.page';

const routes: Routes = [
  {
    path: '',
    component: CartaoDeCreditoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaoDeCreditoPageRoutingModule {}
