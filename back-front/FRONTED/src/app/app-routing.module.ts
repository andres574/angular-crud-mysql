import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ListaAfiliadosComponent } from './components/lista-afiliados/lista-afiliados.component';
//import { EliminarComponent } from './components/editar/eliminar.component';

const routes: Routes = [
  {path:'',redirectTo:'/principal',pathMatch:'full'},
  {path:'principal',component: PrincipalComponent},
  {path:'agregar',component:AgregarComponent},
  {path:'listar',component:ListaAfiliadosComponent},
  {path:'editar/:id',component:AgregarComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
