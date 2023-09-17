import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  public ingresar:boolean = false;

  constructor() { }

  public ingresarAplicativo(obj:any):boolean{
    this.ingresar = obj.usuario =='jhon' && obj.password =='123';
      return this.ingresar
    
  }

  public habilitarlogeo(){
    return this.ingresar;
  }

}
