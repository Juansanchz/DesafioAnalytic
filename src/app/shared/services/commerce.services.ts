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
   * Funcion que obtiene la ubicacion de cada establecimiento para cargar los puntos en el mapa
   */
  getLayer() {
    return this.http.get(apiCommerce + '/layer', httpOptions).pipe();
  }

  /**
   * Funcion que obtiene las ventas de cada comercio
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
