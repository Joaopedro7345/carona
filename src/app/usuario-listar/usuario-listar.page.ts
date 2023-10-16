import { Component, OnInit } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';
import { Router } from '@angular/router';
import {  AlertController } from '@ionic/angular';

/**
 * Dados de interligações do usuário-listar.
 */
@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.page.html',
  styleUrls: ['./usuario-listar.page.scss'],
})

/**
 * Classe UsuarioListarPage é uma página específica que possuí todos os usuários cadastrados.
 */
export class UsuarioListarPage implements OnInit {
  
  /**
   * Vetor que contém os dados Nome, Email, Data, Celular e Senha.
   */
  public usuarios:Array<any> = [];

  /** 
  * Puxa dados de outro local. 
  */
  constructor(

    /**
     * Variável nativa do Angular, que cumpre o papel de navegar entre páginas.
     */
    public router:Router,

    /**
     * Variável de Requisição do banco de dados, ela é quem conversa com o banco de dados.
     */
    public requisicao_service:RequisicaoService,

    /**
     * Variável nativa do Angular que auxilia para criar um alerta de conclusão de exclusão.
     */
    private alertController:AlertController
  ) { }

  /**
   * Recarregador de página.
   */
  ngOnInit() {

    /**
     * Recarrega os dados do listar() para atualizar a lista de usuários.
     */
    this.listar();
  }



  /**
   * Método listar gera a lista de usuários.
   */
  listar(){
    this.requisicao_service.get({
      controller: 'usuario-listar'
    })
    .subscribe(
      (_res:any) => {
        this.usuarios = _res;
      }    
    );
  }
  

  
  /**
   * Método excluir deleta um usuário do banco de dados.
   * @param id Informa qual usuário deve ser exluido
   */
  excluir(id:number){
    this.requisicao_service.get({
      controller:'usuario-excluir',
      id:id
    })
    .subscribe( () => {
      this.listar();
    });
  }

  /**
   * Método editar altera informações antes anexadas no banco de dados, de maneira a trocar e atualizar.
   * @param id Direciona à qual usuário deve ser editado.
   */
  editar(id:number){
    this.router.navigateByUrl('/cadastro-site/' + id);
  }
  
}
