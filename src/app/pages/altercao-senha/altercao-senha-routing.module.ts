import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltercaoSenhaPage } from './altercao-senha.page';

const routes: Routes = [
  {
    path: '',
    component: AltercaoSenhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltercaoSenhaPageRoutingModule {}
