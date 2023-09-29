import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaronaUserPage } from './carona-user.page';

const routes: Routes = [
  {
    path: '',
    component: CaronaUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaronaUserPageRoutingModule {}
