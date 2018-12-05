import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../../config/url.servicios';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  constructor(public http: HttpClient) {
    

   }

   obtenerRegistros(id_area:string){
     let url = URL_SERVICIOS + "/registros/registro/" + id_area;
     return this.http.get( url ).pipe(
       map( (resp: any) => {

         return resp.registro;

       }));

   }

   agregarRegistro(id_wc:string){
     let url = URL_SERVICIOS + "/registros/servicio/" + id_wc;
     return this.http.post(url, id_wc).pipe(
       map( (resp: any) => {

         return resp.servicio;

       }));
   }
}
