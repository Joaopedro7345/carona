import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequisicaoService } from '../service/requisicao.service';

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

  public dados:Array<any> = [];
  /** 
  * Puxa dados de outro local. 
  */
  constructor(
    public requisicao_service:RequisicaoService,
    /**
     * Variável nativa do Angular, que cumpre o papel de navegar entre páginas.
     */
    public router:Router
  ) {}
  ngOnInit() {
    this.listar();
  }

  /**
   * Método que redireciona um botão ao carona-user.
   */
  navCarona(){
    this.router.navigateByUrl('/carona-user');
  }
  listar(){
    this.requisicao_service.get({
      controller: 'motorista-listar'
    }).subscribe(
      (_dados:any) => {
        this.dados = _dados;
      }
    );
  }
}
