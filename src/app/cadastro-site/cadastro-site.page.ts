import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequisicaoService } from '../service/requisicao.service';
import { LoadingController } from '@ionic/angular';

/**
 * Dados de interligações do cadastro-site.
 */
@Component({
  selector: 'app-cadastro-site',
  templateUrl: './cadastro-site.page.html',
  styleUrls: ['./cadastro-site.page.scss'],
})

/**
 * Classe do CadastroSitePage, contém os elementos para a mágica acontecer na área do cadastro e do banco de dados.
 */
export class CadastroSitePage implements OnInit {

  /**
   * Variável que carrega o Id do usuário, seu número de registro no banco de dados.
   */
  public id: number = 0;

  /**
   * Variável que carrega o Nome do usuário, seu dado é no banco de dados.
   */
  public nome: string = '';

  /**
   * Variável que carrega a Data de Nascimento do usuário, para garantir que nenhum menoridade viage sem a permissão dos pais.
   */
  public data: string = '';

  /**
   * Variável que carrega o Email do usuário, seu Email é único registrado no nosso banco de dados.
   */
  public email: string = '';

  /**
   * Variável que carrega o Número celular do usuário, seu número é registrado no banco de dados.
   */
  public celular: string = '';

  /**
   * Variável que carrega a Senha do usuário, sua Senha é registrada criptografada no banco de dados.
   */
  public senha: string = '';

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
     * Variável de Requisição do banco de dados, ela é quem conversa com o banco de dados.
     */
    public requisicao_service: RequisicaoService,

    /**
     * Está é uma variável usada para animar o carregar que aparece na tela enquanto o banco de dados recebe as informações.
     */
    private loadingController: LoadingController,

    /**
     * Este é uma variável nativa do TS, é a base para navegação entre páginas.
     */
    public router: Router,

    /**
     * Essa é uma extensão do Router, porém ele é a base para a navegação dos dados para o banco de dados.
     */
    private activated_router: ActivatedRoute
  ) {
    this.activated_router.params
      .subscribe(
        (params: any) => {
          /**
           * aqui ele está definindo o id se tiver nada vai ter 0, caso tenha algo vai ter
           */
          this.id = params.id == undefined ? 0 : params.id;

          this.requisicao_service.get({
            controller: 'usuario-get',
            id: this.id
          })
            .subscribe(
              (_dados: any) => {
                this.nome = _dados.nome;
                this.data = _dados.data;
                this.celular = _dados.celular;
                this.email = _dados.email;
                this.senha = _dados.senha;
              }
            );
        }
      );
  }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Método que ao acionar o botão de entrar pela primeira vez, cadastrando desta forma o usuário e entrando no aplicativo.
   */
  logar() {
    this.router.navigateByUrl('/login-site');
  }

  /**
   * Método que ao acionar o botão de cadastrar entra em um condicional que verificará se os dados podem ser aceitos, após isso, as informações são redirecionadas ao banco de dados.
   */
  async cadastrar() { //salvar()

    //if(this.required == '' || null){
    //  alert('Um dos campos está incompleto.');
    //} else{
        const loading = await this.loadingController.create({
          message: 'Salvando...',
        });

        await loading.present();

        const fd = new FormData();
        fd.append('controller', 'usuario');
        fd.append('id', String(this.id));
        fd.append('nome', this.nome);
        fd.append('data', this.data);
        fd.append('email', this.email);
        fd.append('celular', this.celular);
        fd.append('senha', this.senha);

        this.requisicao_service
          .post(fd)
          .subscribe(
            async () => {
              await loading.dismiss();
            }
          );
        this.router.navigateByUrl('/home');
    }
 // }

}
