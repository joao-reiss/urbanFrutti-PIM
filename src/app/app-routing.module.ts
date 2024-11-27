import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'esqueci-senha',
    loadChildren: () => import('./pages/esqueci-senha/esqueci-senha.module').then( m => m.EsqueciSenhaPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },

  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'suporte',
    loadChildren: () => import('./pages/suporte/suporte.module').then( m => m.SuportePageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./pages/conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'altercao-senha',
    loadChildren: () => import('./pages/altercao-senha/altercao-senha.module').then( m => m.AltercaoSenhaPageModule)
  },
  {
    path: 'enviar-sms',
    loadChildren: () => import('./pages/enviar-sms/enviar-sms.module').then( m => m.EnviarSmsPageModule)
  },
  {
    path: 'digitar-numero',
    loadChildren: () => import('./pages/digitar-numero/digitar-numero.module').then( m => m.DigitarNumeroPageModule)
  },
  {
    path: 'confirmar-novo-numero',
    loadChildren: () => import('./pages/confirmar-novo-numero/confirmar-novo-numero.module').then( m => m.ConfirmarNovoNumeroPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
