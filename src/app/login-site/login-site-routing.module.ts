import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSitePage } from './login-site.page';

const routes: Routes = [
  {
    path: '',
    component: LoginSitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginSitePageRoutingModule {}
