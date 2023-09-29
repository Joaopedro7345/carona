import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


/**
 * Dados de interligações do verificar-page.
 */
@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.page.html',
  styleUrls: ['./verificar.page.scss'],
})
export class VerificarPage implements OnInit {

  /**
   * Variável da senha do usuário, a mesma que ele cadastrou no banco.
   */
  public senhaVerifica:string = '';
  
  /**
   * Puxa paramentros de outras páginas.
   * @param router Variável de link de sites
   */
  constructor(

    /**
     * Variável nativa para realizar o link de páginas.
     */
    public router:Router
  ) { }

  /**
   * @ignore
   */
  ngOnInit() {
  }

  /**
   * Método de validação de senha, que direciona o funcionário à página do motorista.
   */
  motorista(){
    if (this.senhaVerifica == "senac2023") {
      this.router.navigateByUrl('/motorista');
    } else {
      alert('A senha não coincide.')
    }
  }



}
