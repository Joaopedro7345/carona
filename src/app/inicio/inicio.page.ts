import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Dados de interligações do Inicio-page.
 */
@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
})

/**
 * Classe da Inicio page, a página principal que contém em seu conteúdo as viagem de possível compra.
 */
export class InicioPage implements OnInit {

  /** 
  * Puxa dados de outro local. 
  */
  constructor(

    /**
     * Variável nativa do Angular, que cumpre o papel de navegar entre páginas.
     */
    public router:Router
  ) {}
  ngOnInit() {
  }

  /**
   * Método que redireciona um botão ao carona-user.
   */
  navCarona(){
    this.router.navigateByUrl('/carona-user');
  }
}
