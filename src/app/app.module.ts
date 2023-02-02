import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ListaEspeciesComponent } from './especies/lista-especies/lista-especies.component';
import { NuevoEspeciesComponent } from './especies/nuevo-especies/nuevo-especies.component';
import { EditarEspeciesComponent } from './especies/editar-especies/editar-especies.component';

//External
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DetallesEspeciesComponent } from './especies/detalles-especies/detalles-especies.component';
import { ListaRazasComponent } from './razas/lista-razas/lista-razas.component';
import { DetallesRazasComponent } from './razas/detalles-razas/detalles-razas.component';
import { NuevoRazasComponent } from './razas/nuevo-razas/nuevo-razas.component';
import { EditarRazasComponent } from './razas/editar-razas/editar-razas.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaProductoComponent,
    DetalleProductoComponent,
    NuevoProductoComponent,
    EditarProductoComponent,
    ListaEspeciesComponent,
    NuevoEspeciesComponent,
    EditarEspeciesComponent,
    DetallesEspeciesComponent,
    ListaRazasComponent,
    DetallesRazasComponent,
    NuevoRazasComponent,
    EditarRazasComponent
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
