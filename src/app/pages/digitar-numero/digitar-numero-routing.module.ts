import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitarNumeroPage } from './digitar-numero.page';

const routes: Routes = [
  {
    path: '',
    component: DigitarNumeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigitarNumeroPageRoutingModule {}
