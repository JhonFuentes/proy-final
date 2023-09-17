import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { HeaderFooterComponent } from './modules/header-footer/header-footer.component';

const routes: Routes = [
  {path:'', redirectTo:'/app/login', pathMatch:'full'},
  {path:'app',component:AppComponent,children:[
    {path:'login',component:LoginComponent},
    {path:'principal',component:HeaderFooterComponent}
  ]}
  //{path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
