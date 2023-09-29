import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-motorista',
  templateUrl: './motorista.page.html',
  styleUrls: ['./motorista.page.scss'],
})
export class MotoristaPage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }
  voltar(){
    this.router.navigateByUrl('/home');
  }
  
}
