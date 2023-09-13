import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaskitoOptions, MaskitoElementPredicateAsync } from '@maskito/core';

@Component({
  selector: 'app-cadastro-site',
  templateUrl: './cadastro-site.page.html',
  styleUrls: ['./cadastro-site.page.scss'],
})
export class CadastroSitePage implements OnInit {

 
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
   * Sistema de autentificação de número de celular.
   */
  readonly phoneMask: MaskitoOptions = {
    mask: ['+', '1', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
  };

  readonly cardMask: MaskitoOptions = {
    mask: [
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(4).fill(/\d/),
      ' ',
      ...Array(3).fill(/\d/),
    ],
  };

  readonly maskPredicate: MaskitoElementPredicateAsync = async (el) => (el as HTMLIonInputElement).getInputElement();
  
  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  entrar(){
    this.router.navigateByUrl('/home');
  }
  login(){
    this.router.navigateByUrl('/login-site');
  }


  
}
