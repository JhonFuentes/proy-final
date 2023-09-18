import { Component } from '@angular/core';
import { AutenticacionService } from './services/autenticacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proy-final';

  constructor(private loginprov:AutenticacionService){}

  public verMenu():boolean{
    return this.loginprov.habilitarlogeo();
  }
}
