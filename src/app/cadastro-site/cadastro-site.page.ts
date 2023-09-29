import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Dados de interligações do cadastro-site.
 */
@Component({
  selector: 'app-cadastro-site',
  templateUrl: './cadastro-site.page.html',
  styleUrls: ['./cadastro-site.page.scss'],
})
export class CadastroSitePage implements OnInit {

 
  /**
   * Verificador de limite de caracteres
   * @param inputLength 
   * @param maxLength 
   * @returns 
   */
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caracteres permitidos`;
  }
  
  /** 
  * Puxa dados de outro local. 
  */
  constructor(

    /**
     * Este é uma variável nativa do TS, é a base para navegação entre páginas.
     */
    public router:Router
  ) { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Método que ao acionar o botão de entrar pela primeira vez, cadastrando desta forma o usuário e entrando no aplicativo.
   */
  entrar(){
    this.router.navigateByUrl('/home');
  }

  /**
   * Método que ao acionar o botão de logar, desta forma entrando em um condicional que verificará se existe este usuário no Banco de Dados para entrar no site.
   */
  login(){
    this.router.navigateByUrl('/login-site');
  }
}
