import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroSitePage } from './cadastro-site.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroSitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroSitePageRoutingModule {}
