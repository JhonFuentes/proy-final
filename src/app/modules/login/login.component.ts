import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacionService } from '../../services/autenticacion.service';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public myform!:FormGroup;

  constructor(private fb:FormBuilder,private loginprov:AutenticacionService,private router:Router){}

  ngOnInit(): void {
      this.myform = this.createMyForm();
  }
  private createMyForm():FormGroup{
    return this.fb.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    });
  }

  public submitForm(){
    if(this.myform.invalid){
      Object.values(this.myform.controls).forEach(control=>{
        control.markAllAsTouched();  
      });
      return;
    }
    if(!this.loginprov.ingresarAplicativo(this.myform.value)){
      alert("Usuario o Contraseña invalido");
    }else{
      this.router.navigateByUrl("/app/principal");
    }
  }

  public get f():any{
    return this.myform.controls;
  }

}
