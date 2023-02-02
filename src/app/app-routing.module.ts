import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEspeciesComponent } from './especies/lista-especies/lista-especies.component';
import {DetallesEspeciesComponent} from './especies/detalles-especies/detalles-especies.component'
import { EditarEspeciesComponent } from './especies/editar-especies/editar-especies.component';
import {NuevoEspeciesComponent} from './especies/nuevo-especies/nuevo-especies.component'
import {ListaRazasComponent} from './razas/lista-razas/lista-razas.component';
import{NuevoRazasComponent} from './razas/nuevo-razas/nuevo-razas.component'
import {DetallesRazasComponent} from './razas/detalles-razas/detalles-razas.component'
import {EditarRazasComponent} from './razas/editar-razas/editar-razas.component'
import {ListaDuenosComponent} from './duenos/lista-duenos/lista-duenos.component'
import {DetallesDuenosComponent} from './duenos/detalles-duenos/detalles-duenos.component'
import {EditarDuenosComponent} from './duenos/editar-duenos/editar-duenos.component'
import {NuevoDuenosComponent} from './duenos/nuevo-duenos/nuevo-duenos.component'
import {ListaPacientesComponent} from './pacientes/lista-pacientes/lista-pacientes.component'

const routes: Routes = [
  {path: '', component: ListaEspeciesComponent},
  {path: 'lista-especies', component: ListaEspeciesComponent },
  {path: 'lista-razas', component: ListaRazasComponent },
  {path: 'lista-duenos', component: ListaDuenosComponent },
  {path: 'lista-pacientes', component: ListaPacientesComponent },
  {path: 'especies/detalles-especies/:id', component: DetallesEspeciesComponent },
  {path: 'razas/detalles-razas/:id', component: DetallesRazasComponent },
  {path: 'duenos/detalles-duenos/:idDueno', component: DetallesDuenosComponent },
  {path: 'nuevaEspecie', component: NuevoEspeciesComponent},
  {path: 'nuevaRaza', component: NuevoRazasComponent},
  {path: 'nuevoDueno', component: NuevoDuenosComponent},
  {path: 'especies/editar-especies/:id', component: EditarEspeciesComponent},
  {path: 'razas/editar-razas/:idraza', component: EditarRazasComponent},
  {path: 'duenos/editar-duenos/:idDueno', component: EditarDuenosComponent},



  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
