import {RouterModule, Routes} from '@angular/router';


import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';


// Definir rutas del sitio
const appRoutes: Routes = [
{path: '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
