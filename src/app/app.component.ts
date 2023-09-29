import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Dados de interligações do component, não são importantes para o site, porém não podem ser excluídos.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

/**
 * @ignore
 */
export class AppComponent {

  /**
   * @ignore
   */
  constructor(

    /**
     * Este é uma variável nativa do TS, é a base para navegação entre páginas.
     */
    public router:Router    
  ) {}


  /**
   * Método de link que navega pelo menu para o carona-user.
   */
  navCarona(){
    this.router.navigateByUrl('/carona-user');
  }

  /**
   * Método de link que navega pelo menu para o perfil-page.
   */
  navPerfil(){
    this.router.navigateByUrl('/perfil');
  }

  /**
   * Método de link que navega pelo menu para o home-page.
   */
  navHome(){
    this.router.navigateByUrl('/home');
  } 

  /**
   * Método de link que navega pelo menu para o mapa-page.
   */
  navMapa(){
    this.router.navigateByUrl('/mapa');
  }

  /**
   * Método de link que navega pelo menu para o verificar-page.
   */
  navVerificar(){
    this.router.navigateByUrl('/verificar');
  }      
}
