import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Sanitario } from '../.././models/sanitario.model';


import { URL_SERVICIOS } from '../../../config/url.servicios';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SanitarioService {

  constructor(public http: HttpClient) {
  }

  cargarSanitario(id: number){
     let url = URL_SERVICIOS + '/sanitarios/sanitario/' + id;

     return this.http.get(url).pipe(
       map( (resp: any) => {

         return resp.sanitario;


         }));


  }



}
