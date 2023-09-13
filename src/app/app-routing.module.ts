import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
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
    path: 'login-site',
    loadChildren: () => import('./login-site/login-site.module').then( m => m.LoginSitePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
