import { Component, OnInit } from '@angular/core';
import {SanitariosService} from '../../services/service.index';
import {RegistrosService} from '../../services/service.index';
import {Sanitario} from '../../models/sanitario.model';
import {Registro} from '../../models/registro.model';
import swal from 'sweetalert';


@Component({
  selector: 'app-zpn2-areas',
  templateUrl: './zpn2-areas.component.html',
  styles: []
})
export class Zpn2AreasComponent implements OnInit {
  year: number = new Date().getFullYear();
  sanitarios: Sanitario[] = [];
  registros: Registro[] = [];


  constructor(private _sanitariosService: SanitariosService,
      public _registrosService: RegistrosService) {  }

  ngOnInit() {
    this.obtenerSanitariosZPN2();
  }

  /**Método que obtiene todos los sanitarios del área ZPN2 **/
  obtenerSanitariosZPN2() {

      this._sanitariosService.obtenerSanitariosZPN2()
      .subscribe( sanitarios => this.sanitarios = sanitarios );
      this._registrosService.obtenerRegistros('2')
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
