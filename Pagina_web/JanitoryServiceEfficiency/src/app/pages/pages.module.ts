import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';


import {PAGES_ROUTES} from './pages.routes';






import { Zpn1AreasComponent } from './zpn1-areas/zpn1-areas.component';
import { Zpn2AreasComponent } from './zpn2-areas/zpn2-areas.component';
import { Zpn3LabsAreasComponent } from './zpn3-labs-areas/zpn3-labs-areas.component';
import { OtrosAreasComponent } from './otros-areas/otros-areas.component';



//Modulos

@NgModule({
  declarations: [


    Zpn1AreasComponent,
    Zpn2AreasComponent,
    Zpn3LabsAreasComponent,
    OtrosAreasComponent
  ],
  exports: [

    Zpn1AreasComponent,
    Zpn2AreasComponent,
    Zpn3LabsAreasComponent,
    OtrosAreasComponent


  ],

  imports: [
      PAGES_ROUTES,
      CommonModule

  ]

})

export class PagesModule{

}
