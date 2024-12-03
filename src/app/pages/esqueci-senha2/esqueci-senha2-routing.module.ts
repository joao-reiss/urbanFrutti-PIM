import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsqueciSenha2Page } from './esqueci-senha2.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueciSenha2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsqueciSenha2PageRoutingModule {}
