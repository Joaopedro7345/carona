import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Dados de interligações do home-page.
 */
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

/**
 * Classe da Home page, a página principal que contém em seu conteúdo as viagem de possível compra.
 */
export class HomePage {

  /** 
  * Puxa dados de outro local. 
  */
  constructor(

    /**
     * Variável nativa do Angular, que cumpre o papel de navegar entre páginas.
     */
    public router:Router
  ) {}

  /**
   * Método que redireciona um botão ao carona-user.
   */
  navCarona(){
    this.router.navigateByUrl('/carona-user');
  }
}
