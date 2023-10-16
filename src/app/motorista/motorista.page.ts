import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Dados de interligações do motoristaPage.
 */
@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.page.html',
  styleUrls: ['./motorista.page.scss'],
})

/**
 * Classe MotoristaPage contém dados TypeScript.
 */
export class MotoristaPage implements OnInit {

  /**
   * Contém dados de outros lugares.
   */
  constructor(

    /**
     * Variável nativa do Angular que tem função de ligar páginas.
     */
    public router:Router
  ) { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Método Voltar retorna a página anterior, no caso home-page.
   */
  voltar(){
    this.router.navigateByUrl('/home');
  }
  
}
