import { Component } from '@angular/core';
import { SharedService, SidebarService, SanitariosService, RegistrosService} from './services/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JanitoryServiceEfficiency';
}
