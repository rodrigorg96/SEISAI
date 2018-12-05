import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [

  {
    titulo: 'Áreas ZPN',
    icono: 'mdi mdi-map-marker-radius',
    submenu: [
      { titulo: 'ZPN1', url: '/zpn1-areas' },
      { titulo: 'ZPN2', url: '/zpn2-areas' },
      { titulo: 'ZPN3-LABS', url: '/zpn3-labs-areas' },
      { titulo: 'OTROS', url: '/otros-areas' }
    ]
  }
];

  constructor() { }
}
