import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sanitario } from '../models/sanitario.model';


import { URL_SERVICIOS } from '../../config/url.servicios';
import { map } from 'rxjs/operators';






@Injectable()
export class SanitariosService {



  constructor(public http: HttpClient) {
    this.obtenerSanitariosZPN1();
    this.obtenerSanitariosZPN2();
    this.obtenerSanitariosZPN3();
    this.obtenerSanitariosOtros();

  }



  obtenerSanitariosZPN1(){

    let url = URL_SERVICIOS + '/sanitarios/sanitarios_area/zpn1';
    return this.http.get( url ).pipe(
      map( (resp: any) => {

        return resp.sanitarios_area;

      }));

    }

  obtenerSanitariosZPN2(){

    let url = URL_SERVICIOS + '/sanitarios/sanitarios_area/zpn2';
    return this.http.get( url ).pipe(
              map( (resp: any) => {

                return resp.sanitarios_area;

              }));

    }

    obtenerSanitariosZPN3(){

      let url = URL_SERVICIOS + '/sanitarios/sanitarios_area/zpn3-labs';
      return this.http.get( url ).pipe(
                map( (resp: any) => {

                  return resp.sanitarios_area;

                }));

      }

      obtenerSanitariosOtros(){

        let url = URL_SERVICIOS + '/sanitarios/sanitarios_area/otros';
        return this.http.get( url ).pipe(
                  map( (resp: any) => {

                    return resp.sanitarios_area;

                  }));

        }
}
