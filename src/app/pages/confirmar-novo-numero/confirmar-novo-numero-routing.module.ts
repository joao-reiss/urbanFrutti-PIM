import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmarNovoNumeroPage } from './confirmar-novo-numero.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmarNovoNumeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmarNovoNumeroPageRoutingModule {}
