import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-site',
  templateUrl: './login-site.page.html',
  styleUrls: ['./login-site.page.scss'],
})
export class LoginSitePage implements OnInit {

  public nome:string = '';

  /**
   * animador nos inputs de cadastro
   * @param inputLength 
   * @param maxLength 
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

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  entrar(){
    this.router.navigateByUrl('/home');
  }
  cadastro(){
    this.router.navigateByUrl('/cadastro-site');
  }
}
