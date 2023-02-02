import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Duenos } from '../../models/duenos';
import { DuenosService } from '../../service/duenos.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-duenos',
  templateUrl: './lista-duenos.component.html',
  styleUrls: ['./lista-duenos.component.css']
})


export class ListaDuenosComponent implements OnInit{
  duenoss: Duenos[]=[];
  
  constructor(
    private duenosService: DuenosService,
    private toastr: ToastrService
    ){}

    ngOnInit() {
      // aquí puede inicializar el estado del componente
      this.cargarDuenos();
    }

    cargarDuenos(): void{
      this.duenosService.lista().subscribe(data=>{
        this.duenoss=data;
      },
      err=>{
        console.log(err);
      }
      )
    }

    borrar(idDueno: number) {
      this.duenosService.delete(idDueno).subscribe(
        data => {
          this.toastr.success('Dueño Eliminado', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarDuenos();
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
        }
      );
    }


}
