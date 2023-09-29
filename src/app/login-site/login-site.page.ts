import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Dados de interligações do login-site.
 */
@Component({
  selector: 'app-login-site',
  templateUrl: './login-site.page.html',
  styleUrls: ['./login-site.page.scss'],
})

/**
 * Classe para o Login-site, ele contém as variáveis, métodos e funções do site.
 */
export class LoginSitePage implements OnInit {

  /**
   * animador nos inputs de cadastro
   * @param inputLength Caixa de texto da senha.
   * @param maxLength Limite de caracteres da senha.
   * @returns 
   */
  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} caracteres permitidos`;
  }
  /**
   * Botão de 'ok' dos termos de uso.
   */
  toastButtons = [
    {
      text: 'Ok!',
    },
  ];

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
   * Método validador do usuário para ele logar no aplicativo.
   */
  entrar(){
    this.router.navigateByUrl('/home');
  }

  /**
   * Método que transporta ele para o cadastro-site no aplicativo.
   */
  cadastro(){
    this.router.navigateByUrl('/cadastro-site');
  }
}
