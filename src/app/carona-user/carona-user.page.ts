import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastController } from '@ionic/angular';

/**
 * Dados de interligações do carona-user.
 */
@Component({
  selector: 'app-carona-user',
  templateUrl: './carona-user.page.html',
  styleUrls: ['./carona-user.page.scss'],
})

/**
 * Classe para o Carona-User, a página que detalha sobre a viagem do motorista, e a compra.
 */
export class CaronaUserPage implements OnInit {

  public checkBox:boolean = false;
  /**
   * @ignore
   */
  constructor(
    public router:Router,
    private toastController: ToastController
  ) { }

  /**
 * @ignore
 */
  ngOnInit() {
  }

  comprar(){
    if(this.checkBox == true){
      this.router.navigateByUrl('/home/');
      alert("Compra finalizada!")
    } else {
      alert("Informe a forma de pagamento!")
    }
  }
}
