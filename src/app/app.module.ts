import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeactureModule } from './feacture/feacture.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FeactureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
