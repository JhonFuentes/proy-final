import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.css']
})
export class HeaderFooterComponent implements OnInit{

  
  constructor(){
  }
  
  ngOnInit(): void {
      
  }

  //fechaActual: Date = new Date();
  fechaLiteral: string = new Date().toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
