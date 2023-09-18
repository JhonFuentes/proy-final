import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './modules/login/login.component';
import { HeaderFooterComponent } from './modules/header-footer/header-footer.component';
import { SidebarComponent } from './modules/sidebar/sidebar.component';
import { SubmenuComponent } from './modules/sidebar/submenu/submenu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderFooterComponent,
    SidebarComponent,
    SubmenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
