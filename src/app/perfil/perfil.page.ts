import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoService } from '../service/requisicao.service';

/**
 * Dados de interligações do Perfil-page.
 */
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})

/**
 * Classe PerfilPage contém elementos TypeScript.
 */
export class PerfilPage implements OnInit {

  public usuarios:Array<any> = [];
  public user_name:string = '';

  /**
   * @ignore
   */
  constructor(

    /**
     * Variável nativa do Angular, que cumpre o papel de navegar entre páginas.
     */
    public router:Router,
    
    public requisicao_service:RequisicaoService
  ) { }

  /**
   * @ignore
   */
  ngOnInit() {
    this.user_name = String(sessionStorage.getItem('user_name'));
  }
}

