import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductoComponent } from './producto/lista-producto.component';
import { DetalleProductoComponent } from './producto/detalle-producto.component';
import { NuevoProductoComponent } from './producto/nuevo-producto.component';
import { EditarProductoComponent } from './producto/editar-producto.component';
import { ListaEspeciesComponent } from './especies/lista-especies/lista-especies.component';
import {DetallesEspeciesComponent} from './especies/detalles-especies/detalles-especies.component'
import { EditarEspeciesComponent } from './especies/editar-especies/editar-especies.component';
import {NuevoEspeciesComponent} from './especies/nuevo-especies/nuevo-especies.component'
const routes: Routes = [
  {path: '', component: ListaProductoComponent},
  {path: 'lista-especies', component: ListaEspeciesComponent },
  { path: 'especies/detalles-especies/:id', component: DetallesEspeciesComponent },
  {path: 'detalle/:id', component: DetalleProductoComponent},
  {path: 'nuevo', component: NuevoProductoComponent},
  {path: 'nuevaEspecie', component: NuevoEspeciesComponent},
  {path: 'editar/:id', component: EditarProductoComponent},
  {path: 'especies/editar-especies/:id', component: EditarEspeciesComponent},


  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
