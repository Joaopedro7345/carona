import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
 
  /** 
  * Puxa dados de outro local. 
  */
  constructor(

    /**
     * Este é uma variável nativa do TS, é a base para navegação entre páginas.
     */
    public router:Router
  ) {}

  ngOnInit() {}

  navPerfil(){
    this.router.navigateByUrl('/perfil');
  }
  navHome(){
    this.router.navigateByUrl('/home');
  } 
  navMapa(){
    this.router.navigateByUrl('/mapa');
  } 
  navMsg(){
    this.router.navigateByUrl('/mensagem');
  }
  navMotorista(){
    this.router.navigateByUrl('/motorista');
  }
  

}
