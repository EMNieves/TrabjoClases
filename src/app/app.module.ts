import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { ContentComponent } from './components/layout/content/content.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { SectionComponent } from './components/layout/section/section.component';
import { AsideComponent } from './components/layout/aside/aside.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MostrarclientesComponent } from './components/Clientes/mostrarclientes/mostrarclientes.component';
import { MostrarventasComponent } from './components/Ventas/mostrarventas/mostrarventas.component';
import { MostrarcochesComponent } from './components/Coche/mostrarcoches/mostrarcoches.component';
import { MostrarmarcasComponent } from './components/marcas/mostrarmarcas/mostrarmarcas.component';
import { ActualizarClientesComponent } from './components/Clientes/actualizar-clientes/actualizar-clientes.component';
import { CrearClientesComponent } from './components/Clientes/crear-clientes/crear-clientes.component';
import { EliminarClientesComponent } from './components/Clientes/eliminar-clientes/eliminar-clientes.component';
import { AgregarVentasComponent } from './components/Ventas/agregar-ventas/agregar-ventas.component';
import { ActualizarVentasComponent } from './components/Ventas/actualizar-ventas/actualizar-ventas.component';
import { EliminarVentasComponent } from './components/Ventas/eliminar-ventas/eliminar-ventas.component';
import { EliminarCochesComponent } from './components/Coche/eliminar-coches/eliminar-coches.component';
import { CrearCochesComponent } from './components/Coche/crear-coches/crear-coches.component';
import { ActualizarCochesComponent } from './components/Coche/actualizar-coches/actualizar-coches.component';
import { CrearMarcasComponent } from './components/marcas/crear-marcas/crear-marcas.component';
import { ActualizarMarcasComponent } from './components/marcas/actualizar-marcas/actualizar-marcas.component';
import { EliminarMarcasComponent } from './components/marcas/eliminar-marcas/eliminar-marcas.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    SectionComponent,
    AsideComponent,
    MostrarclientesComponent,
    MostrarventasComponent,
    MostrarcochesComponent,
    MostrarmarcasComponent,
    ActualizarClientesComponent,
    CrearClientesComponent,
    EliminarClientesComponent,
    AgregarVentasComponent,
    ActualizarVentasComponent,
    EliminarVentasComponent,
    EliminarCochesComponent,
    CrearCochesComponent,
    ActualizarCochesComponent,
    CrearMarcasComponent,
    ActualizarMarcasComponent,
    EliminarMarcasComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    PanelMenuModule,
    HttpClientModule,
    CommonModule,
    TableModule,
    ToastModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
