import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ListaAfiliadosComponent } from './components/lista-afiliados/lista-afiliados.component';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    AgregarComponent,
    ListaAfiliadosComponent
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
