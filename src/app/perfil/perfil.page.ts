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

    /**
     * Recarrega os dados do listar() para atualizar a lista de usuários.
     */
    this.perfil();
  }

  perfil(){
    this.requisicao_service.get({
      controller: 'perfil'
    })
    .subscribe(
      (_res:any) => {
        this.usuarios = _res;
      }    
    );
  }
}

