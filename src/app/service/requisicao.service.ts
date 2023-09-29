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
  * @param http 
  */
  constructor(

    /**
     * Variável nativa do Angular.
     */
    public http: HttpClient
  ) { }

  /**
   * Recebe paramentros para adicionar na variável dados.
   * @param dados 
   * @returns 
   */
  get(dados: any) {
    return this.http.get('/requisicao', {
      params: {
        _dados: dados
      }
    });
  }

  /**
   * Requisição para puxar o banco de dados.
   * @param formData 
   * @returns 
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
