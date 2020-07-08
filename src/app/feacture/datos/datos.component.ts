import { Component, OnInit } from '@angular/core';

/** Servicios */
import { CommerceServices } from '../../shared/services/commerce.services';

/** Modelos */
import { Commerce } from '../../shared/models/commerce';
import { SweetAlertsService } from 'src/app/shared/services/sweet-alerts.service';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit {
  listCommerces: Commerce[];

  constructor(
    private commerceServices: CommerceServices,
    private sweetAlertsService: SweetAlertsService
  ) {
    this.consultar();
  }

  ngOnInit(): void {}

  consultar() {
    this.commerceServices.getCommerces().subscribe((data: any) => {
      this.listCommerces = data;
    });
  }

  mostrartContacto(commerce: Commerce) {
    const informacionContato =
      `<p>Teléfono: ${commerce.phone}</p>
    <p>Dirección: ${commerce.address}</p>`;
    this.sweetAlertsService.popUpHtml(commerce.name, informacionContato, 'info');
  }
}
