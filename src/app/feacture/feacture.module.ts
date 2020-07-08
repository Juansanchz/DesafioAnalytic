import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapboxComponent } from './mapbox/mapbox.component';
import { DatosComponent } from './datos/datos.component';

@NgModule({
  declarations: [
    MapboxComponent,
    DatosComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MapboxComponent,
    DatosComponent
  ],
})
export class FeactureModule { }
