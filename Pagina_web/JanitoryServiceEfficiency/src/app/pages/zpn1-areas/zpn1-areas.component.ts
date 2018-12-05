import { Component, OnInit } from '@angular/core';
import {SanitariosService} from '../../services/service.index';
import {RegistrosService} from '../../services/service.index';
import {Sanitario} from '../../models/sanitario.model';
import {Registro} from '../../models/registro.model';
import swal from 'sweetalert';


@Component({
  selector: 'app-zpn1-areas',
  templateUrl: './zpn1-areas.component.html',
  styles: []
})
export class Zpn1AreasComponent implements OnInit {
  year: number = new Date().getFullYear();
  sanitarios: Sanitario[] = [];
    registros: Registro[] = [];

  constructor(public _sanitariosService: SanitariosService,
              public _registrosService: RegistrosService) {

   }

  ngOnInit() {
    this.obtenerSanitariosZPN1();
  }

  /**Método que obtiene todos los sanitarios del área ZPN1 **/
  obtenerSanitariosZPN1() {

      this._sanitariosService.obtenerSanitariosZPN1()
      .subscribe( sanitarios => this.sanitarios = sanitarios );
      this._registrosService.obtenerRegistros('1')
      .subscribe(registros => this.registros = registros);

  }

  servicioRealizado(id_wc:string){
    /**this.este : Registro
    for (let registro of this.registros) {
        if (''+registro.id_wc==id_wc) {
          this.este = registro;
          break;
        }
    }**/
    swal({
      title: "¿Está seguro de esto?",
      text: "Se reiniciará el conteo de personas que han accedido al baño.",
      icon: "warning",
      buttons: ['Cancelar', 'Aceptar']
    })
    .then((willDelete) => {
      if (willDelete) {
        this._registrosService.agregarRegistro(id_wc).subscribe(registros => this.registros.push(registros));
        swal('¡Realizado!', 'Servicio registrado con éxito', 'success').then(function(){
           location.reload();
           }
        );
      } else {

      }
    });
  }
}
