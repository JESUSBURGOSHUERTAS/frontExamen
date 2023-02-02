import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ListaEspeciesComponent } from './especies/lista-especies/lista-especies.component';
import { NuevoEspeciesComponent } from './especies/nuevo-especies/nuevo-especies.component';
import { EditarEspeciesComponent } from './especies/editar-especies/editar-especies.component';
import { DetallesEspeciesComponent } from './especies/detalles-especies/detalles-especies.component';
import { ListaRazasComponent } from './razas/lista-razas/lista-razas.component';
import { DetallesRazasComponent } from './razas/detalles-razas/detalles-razas.component';
import { NuevoRazasComponent } from './razas/nuevo-razas/nuevo-razas.component';
import { EditarRazasComponent } from './razas/editar-razas/editar-razas.component';
import { ListaDuenosComponent } from './duenos/lista-duenos/lista-duenos.component';
import { DetallesDuenosComponent } from './duenos/detalles-duenos/detalles-duenos.component';
import { NuevoDuenosComponent } from './duenos/nuevo-duenos/nuevo-duenos.component';
import { EditarDuenosComponent } from './duenos/editar-duenos/editar-duenos.component';
import { ListaPacientesComponent } from './pacientes/lista-pacientes/lista-pacientes.component';
import { DetallesPacientesComponent } from './pacientes/detalles-pacientes/detalles-pacientes.component';
import { NuevoPacientesComponent } from './pacientes/nuevo-pacientes/nuevo-pacientes.component';
import { EditarPacientesComponent } from './pacientes/editar-pacientes/editar-pacientes.component';
//External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    AppComponent,
    ListaEspeciesComponent,
    NuevoEspeciesComponent,
    EditarEspeciesComponent,
    DetallesEspeciesComponent,
    ListaRazasComponent,
    DetallesRazasComponent,
    NuevoRazasComponent,
    EditarRazasComponent,
    ListaDuenosComponent,
    DetallesDuenosComponent,
    NuevoDuenosComponent,
    EditarDuenosComponent,
    ListaPacientesComponent,
    DetallesPacientesComponent,
    NuevoPacientesComponent,
    EditarPacientesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
