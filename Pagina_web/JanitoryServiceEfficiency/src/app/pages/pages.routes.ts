import {RouterModule, Routes} from '@angular/router';

import {Zpn1AreasComponent} from './zpn1-areas/zpn1-areas.component';
import {Zpn2AreasComponent} from './zpn2-areas/zpn2-areas.component';
import {Zpn3LabsAreasComponent} from './zpn3-labs-areas/zpn3-labs-areas.component';
import {OtrosAreasComponent} from './otros-areas/otros-areas.component';






const pagesRoutes: Routes = [

  {
    path: '',

    children: [
      {path: 'zpn1-areas', component: Zpn1AreasComponent, data: {titulo: 'ZPN1'}},
      {path: 'zpn2-areas', component: Zpn2AreasComponent, data: {titulo: 'ZPN2'}},
      {path: 'zpn3-labs-areas', component: Zpn3LabsAreasComponent, data: {titulo: 'ZPN3-LABS'}},
      {path: 'otros-areas', component: OtrosAreasComponent, data: {titulo: 'OTROS'}},

      //ZPN

      {path: '', redirectTo: '/zpn1-areas', pathMatch: 'full' }

    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
