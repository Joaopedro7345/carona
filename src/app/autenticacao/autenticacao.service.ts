import { Injectable } from '@angular/core';
import { RequisicaoService } from '../service/requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    public requisicao_service:RequisicaoService
  ) { }

  logar(email:string,senha:string){
    const fd = new FormData();
    fd.append('controller','logar');
    fd.append('email',email);
    fd.append('senha',senha);

    return this.requisicao_service.post(fd);
  }

  validarToken(_token:string){
    return this.requisicao_service.get({
      controller:'validar-token',
      token:_token
    });
  }
}
