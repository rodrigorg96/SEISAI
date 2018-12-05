
import { FormsModule ,  ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule} from '@angular/common';


//Rutas
import {APP_ROUTES} from './app.routes';

//Modulos
import {PagesModule} from './pages/pages.module';
import {SharedModule} from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';




//Servicios
import {ServiceModule} from './services/service.module';
import {SanitariosService} from './services/service.index';
import {RegistrosService} from './services/service.index';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    SharedModule,
    ServiceModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    SanitariosService,
    RegistrosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
