import { Component, OnInit } from '@angular/core';
import {Sanitario} from '../../models/sanitario.model';

@Component({
  selector: 'app-sanitarios',
  templateUrl: './sanitarios.component.html',
  styles: []
})
export class SanitariosComponent implements OnInit {

  sanitario: Sanitario[] = [];
  desde: number = 0;
  totalSanitarios: number = 0;

  constructor() { }

  ngOnInit() {
  }

  cargarSanitarios(){

  }

}
