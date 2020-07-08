import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapboxComponent } from './feacture/mapbox/mapbox.component';
import { DatosComponent } from './feacture/datos/datos.component';
import { GraficasComponent } from './feacture/graficas/graficas.component';


const routes: Routes = [
  { path: 'mapa', component: MapboxComponent },
  { path: 'comercios', component: DatosComponent },
  { path: 'graficas', component: GraficasComponent },
  { path: '**', redirectTo: '/mapa', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
