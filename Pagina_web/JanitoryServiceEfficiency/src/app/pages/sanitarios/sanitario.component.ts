import { Component, OnInit } from '@angular/core';
import {SanitarioService} from '../../services/service.index';
import {Sanitario} from '../../models/sanitario.model';
import {Router, ActivatedRoute} from '@angular/router';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-sanitario',
  templateUrl: './sanitario.component.html',
  styles: []
})
export class SanitarioComponent implements OnInit {

 sanitario: Sanitario = new Sanitario(0,0,"",0,0);
 //sanitario: Sanitario[] = [];

  constructor(
              public _sanitarioService: SanitarioService,
              public router: Router,
              public activatedRoute: ActivatedRoute) {

                activatedRoute.params.subscribe(params =>{
                  let id = params['id'];

                  if(id !== 'nuevo'){
                    this.cargarSanitario(id);

                  }
                });
              }

  ngOnInit() {



  }

  cargarSanitario(id: number){
    this._sanitarioService.cargarSanitario(id)
    .subscribe( sanitario =>{
      this.sanitario = sanitario;
      console.log(sanitario);

    });





  }

}
