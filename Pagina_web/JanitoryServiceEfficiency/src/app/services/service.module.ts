import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';



import {
  SharedService,
  SidebarService,
  SanitariosService,
  SanitarioService,
  RegistrosService
  } from './service.index';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SharedService,
    SidebarService,
    SanitariosService,
    SanitarioService,
    RegistrosService

  ]
})
export class ServiceModule { }
