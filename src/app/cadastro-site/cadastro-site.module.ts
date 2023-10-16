import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroSitePageRoutingModule } from './cadastro-site-routing.module';
import { CadastroSitePage } from './cadastro-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroSitePageRoutingModule
  ],
  declarations: [CadastroSitePage],
})
export class CadastroSitePageModule {}
