import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardService } from './service/guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivateChild: [GuardService]
  },
  {
    path: '',
    redirectTo: 'cadastro-site',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-site',
    loadChildren: () => import('./cadastro-site/cadastro-site.module').then( m => m.CadastroSitePageModule)
  },
  {
    path: 'cadastro-site/:id',
    loadChildren: () => import('./cadastro-site/cadastro-site.module').then( m => m.CadastroSitePageModule)
  },  
  {
    path: 'login-site',
    loadChildren: () => import('./login-site/login-site.module').then( m => m.LoginSitePageModule)
  },
  {
    path: 'carona-user',
    loadChildren: () => import('./carona-user/carona-user.module').then( m => m.CaronaUserPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'mensagem',
    loadChildren: () => import('./mensagem/mensagem.module').then( m => m.MensagemPageModule)
  },
  {
    path: 'motorista',
    loadChildren: () => import('./motorista/motorista.module').then( m => m.MotoristaPageModule)
  },
  {
    path: 'verificar',
    loadChildren: () => import('./verificar/verificar.module').then( m => m.VerificarPageModule)
  },
  {
    path: 'usuario-listar',
    loadChildren: () => import('./usuario-listar/usuario-listar.module').then( m => m.UsuarioListarPageModule)
  },
  {
    path: 'autenticacao',
    loadChildren: () => import('./autenticacao/autenticacao.module').then( m => m.AutenticacaoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
