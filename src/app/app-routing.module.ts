import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MostrarclientesComponent} from './components/Clientes/mostrarclientes/mostrarclientes.component'
import {CrearClientesComponent} from './components/Clientes/crear-clientes/crear-clientes.component'
import {ActualizarClientesComponent} from './components/Clientes/actualizar-clientes/actualizar-clientes.component'
import { EliminarClientesComponent } from './components/Clientes/eliminar-clientes/eliminar-clientes.component';
import { AgregarVentasComponent } from './components/Ventas/agregar-ventas/agregar-ventas.component';
import { MostrarventasComponent } from './components/Ventas/mostrarventas/mostrarventas.component';
import { ActualizarVentasComponent } from './components/Ventas/actualizar-ventas/actualizar-ventas.component';
import { EliminarVentasComponent } from './components/Ventas/eliminar-ventas/eliminar-ventas.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/', 
    pathMatch: 'full' 
  },
  {
    path: "clientes",
    component: MostrarclientesComponent
  },
  {
    path: "addclientes",
    component: CrearClientesComponent
  },
  {
    path: "clientes/edit/:id",
    component: ActualizarClientesComponent
  },
  {
    path: "deleteclientes/:id",
    component: EliminarClientesComponent
  },


  //--------------------------------------------------//
  {
    path: "ventas",
    component: MostrarventasComponent
  },
  {
    path: "addventas",
    component: AgregarVentasComponent
  },
  {
    path: "ventas/edit/:id",
    component: ActualizarVentasComponent
  },
  {
    path: "deleteventas/:id",
    component: EliminarVentasComponent
  },

  //-----------------------------------------------------------//

  

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
