import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(
    public router:Router
  ) { }

  ngOnInit() {
  }

  navPerfil(){
    this.router.navigateByUrl('/perfil');
  }
  navHome(){
    this.router.navigateByUrl('/home');  
  }
}
