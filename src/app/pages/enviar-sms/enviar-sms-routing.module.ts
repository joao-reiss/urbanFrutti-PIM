import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnviarSmsPage } from './enviar-sms.page';

const routes: Routes = [
  {
    path: '',
    component: EnviarSmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnviarSmsPageRoutingModule {}
