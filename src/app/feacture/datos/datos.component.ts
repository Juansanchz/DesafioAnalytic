import { Component, OnInit } from '@angular/core';

/** Servicios */
import { CommerceServices } from '../../shared/services/commerce.services';

/** Modelos */
import { Commerce } from '../../shared/models/commerce';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit {
  listCommerces: Commerce[];

  constructor(public commerceServices: CommerceServices) {
    this.consultar();
  }

  ngOnInit(): void {}

  consultar() {
    this.commerceServices.getCommerces().subscribe((data: any) => {
      this.listCommerces = data;
    });
  }
}
