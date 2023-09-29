import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.page.html',
  styleUrls: ['./mensagem.page.scss'],
})
export class MensagemPage implements OnInit {

  public nickname:string = '';
  public mensagem:string = '';


  constructor(
    ) { 
    }

  ngOnInit() {
  }

  receb(usernameU:string){
    this.nickname = usernameU;
  }

  send(){
    let username = this.nickname;
    let mensagem = this.mensagem;
    
    if (mensagem != ''){
      alert("mensagem");
    } else {
      alert('Digite algo!');
    }
  }
}
