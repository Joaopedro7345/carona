import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginSitePageRoutingModule } from './login-site-routing.module';

import { LoginSitePage } from './login-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginSitePageRoutingModule
  ],
  declarations: [LoginSitePage]
})
export class LoginSitePageModule {}
