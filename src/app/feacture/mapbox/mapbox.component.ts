import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as Mapboxgl from 'mapbox-gl';

import { CommerceServices } from '../../shared/services/commerce.services';
import { Layer } from 'src/app/shared/models/layer';

@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.component.html',
  styleUrls: ['./mapbox.component.css'],
})
export class MapboxComponent implements OnInit {
  map: Mapboxgl.Map;  
  constructor(public commerceServices: CommerceServices) {}  
  ngOnInit(): void {
    Mapboxgl.accessToken = environment.keyMapBox;

    this.map = new Mapboxgl.Map({
      container: 'mapbox', // * Id del contenedor en el cual se visualizará el mapa
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.10415649414062, 4.693457320237691], // * Posicion inicial del mapa [longitud, latitud]
      zoom: 10, // * Acercar el mapa
    });

    this.consultar();
  }

  createMarker(lng: number, lat: number) {
    const marker = new Mapboxgl.Marker({
      draggable: false,
    })
      .setLngLat({
        lng: lng, 
        lat: lat
      }).addTo(this.map);
  }

  consultar() {
    this.commerceServices.getLayer().subscribe((data: Layer) => {
      data.features.forEach((element: any) => {
        this.createMarker(element.geometry.coordinates[0], element.geometry.coordinates[1]);
        console.log(element.geometry.coordinates[0] + " : " + element.geometry.coordinates[1])
      })
    });
  }
};
