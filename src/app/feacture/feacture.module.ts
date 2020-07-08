import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts'; // * Graficos

import { MapboxComponent } from './mapbox/mapbox.component';
import { DatosComponent } from './datos/datos.component';
import { GraficasComponent } from './graficas/graficas.component';

@NgModule({
  declarations: [
    MapboxComponent,
    DatosComponent,
    GraficasComponent,
  ],
  imports: [
    ChartsModule,
    CommonModule
  ],
  exports: [
    MapboxComponent,
    DatosComponent
  ],
})
export class FeactureModule { }
