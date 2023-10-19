import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../autenticacao/autenticacao.service';

/**
 * Dados de interligações do Home.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

/**
 * Classe para o Home, ele contém as variáveis, métodos e funções do site.
 */
export class HomePage{
  
  public email: string = '';
  public senha: string = '';
  public is_open_error_alert: boolean = false;

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
    public autenticacao_service: AutenticacaoService,
    private router: Router,
  ) { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Método validador do usuário para ele logar no aplicativo.
   */
  logar() {
    let email = this.email;
    let senha = this.senha;

    this.autenticacao_service
      .logar(email, senha)
      .subscribe(
        async (_res: any) => {
          if (_res.status == 'success') {
            sessionStorage.setItem('user_id', _res.user_id);
            sessionStorage.setItem('user_name', _res.user_name);
            sessionStorage.setItem('token', _res.token);
            this.router.navigateByUrl('/listar-site');
          } else {
            this.is_open_error_alert = true;
          }
        }
      );
  }

  /**
   * Método que transporta ele para o cadastro-site no aplicativo.
   */
  cadastro(){
    this.router.navigateByUrl('/cadastro-site');
  }
}
