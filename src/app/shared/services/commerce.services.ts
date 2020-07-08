import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { httpOptions, apiCommerce} from '../config/endPoints';

@Injectable({
  providedIn: 'root'
})
export class CommerceServices {

  constructor(
    private http: HttpClient) {
  }

  /**
   * Funcion que obtiene todas las capas para cargar los puntos en el mapa
   */
  getLayer() {
    return this.http.get(apiCommerce + '/layer', httpOptions).pipe();
  }

  /**
   * Funcion que obtiene los valores necesarios para realizar las graficas
   */
  getGraph() {
    return this.http.get(apiCommerce + '/graph', httpOptions).pipe();
  }

  /**
   * Funcion que obtiene todos los comercios con sus respectivos atributos
   */
  getCommerces() {
    return this.http.get(apiCommerce, httpOptions).pipe();
  }
}
