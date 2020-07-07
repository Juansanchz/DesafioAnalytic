import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MapboxComponent } from './mapbox/mapbox.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MapboxComponent,
  ],
  exports: [
    DashboardComponent,
    MapboxComponent
  ],
})
export class FeactureModule { }