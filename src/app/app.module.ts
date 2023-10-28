import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    EliminarVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
