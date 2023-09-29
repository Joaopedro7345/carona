import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaronaUserPageRoutingModule } from './carona-user-routing.module';

import { CaronaUserPage } from './carona-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaronaUserPageRoutingModule
  ],
  declarations: [CaronaUserPage]
})
export class CaronaUserPageModule {}
