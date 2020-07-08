import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FeactureModule } from './feacture/feacture.module';
import { LoaderComponent } from './core/loader/loader.component';
import { LoaderInterceptorService } from './core/loader/loader-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    FeactureModule
  ],
  providers: [
    [{
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true
    }]
  ],
  entryComponents: [LoaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
