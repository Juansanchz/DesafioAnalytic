import { Injectable, EventEmitter } from '@angular/core';

import Swal, { SweetAlertIcon } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertsService {

  popUp(titulo: string, mensaje: string, tipo: SweetAlertIcon) {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: tipo
    });
  }

  popUpHtml(titulo: string, mensaje: string, tipo: SweetAlertIcon) {
    Swal.fire({
      title: titulo,
      html: mensaje,
      icon: tipo
    });
  }

}
