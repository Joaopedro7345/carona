import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequisicaoService } from './service/requisicao.service';

/**
 * Dados de interligações do component, não são importantes para o site, porém não podem ser excluídos.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

/**
 * @ignore
 */
export class AppComponent {
  public exibir_menu:boolean = false;

  
  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  
  /**
   * @ignore
   */
  constructor(

    
    /**
     * Este é uma variável nativa do TS, é a base para navegação entre páginas.
     */
    public router:Router,

    /**
     * Variável de Requisição do banco de dados, ela é quem conversa com o banco de dados.
     */
    public requisicao_service:RequisicaoService
  ) {  
    let path = location.href.split('/').reverse()[0];
    switch(path){
      case 'cadastro-site':
      case '':
      case 'cadastro-site/:id':
        this.exibir_menu = false;
      break;
      default:
        this.exibir_menu = true;
    }
  }


  /**
   * Método de link que navega pelo menu para o carona-user.
   */
  navCarona(){
    this.router.navigateByUrl('/carona-user');
  }

  /**
   * Método de link que navega pelo menu para o perfil-page.
   */
  navPerfil(){
    this.router.navigateByUrl('/perfil');
  }

  /**
   * Método de link que navega pelo menu para o home-page.
   */
  navHome(){
    this.router.navigateByUrl('/home');
  } 

  /**
   * Método de link que navega pelo menu para o mapa-page.
   */
  navMapa(){
    this.router.navigateByUrl('/mapa');
  }

  /**
   * Método de link que navega pelo menu para a mensagem-page.
   */
  navMsg(){
    this.router.navigateByUrl('/mensagem');
  }

  /**
   * Método de link que navega pelo menu para o verificar-page.
   */
  navVerificar(){
    this.router.navigateByUrl('/verificar');
  }      
}
