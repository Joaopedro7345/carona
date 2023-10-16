import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Requisição do banco de dados.
 */
@Injectable({
  providedIn: 'root'
})

/**
 * Classe RequisicaoService armazena códigos de conversa diretamente com o banco de dados.
 */
export class RequisicaoService {

  /**
  * Recebe dados de outra página
  */
  constructor(

    /**
     * Variável nativa do Angular.
     */
    public http: HttpClient
  ) { }

  /**
   * Recebe paramentros para adicionar na variável dados.
   * @param dados Dados como nome, email, celular, data e senha são armazenados nesse parametro.
   */
  get(dados: any) {
    return this.http.get('/requisicao', {
      params: dados
    });
  }

  /**
   * Requisição para puxar o banco de dados.
   */
  post(formData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })
    };
    return this.http.post('/requisicao', formData, httpOptions);
  }
}
