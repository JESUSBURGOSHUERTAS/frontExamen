import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RazasService } from 'src/app/service/razas.service';
import { Razas } from '../../models/razas';
@Component({
  selector: 'app-lista-razas',
  templateUrl: './lista-razas.component.html',
  styleUrls: ['./lista-razas.component.css']
})
export class ListaRazasComponent implements OnInit{
  razass: Razas[]=[];

  constructor(
    private razasService: RazasService,
    private toastr: ToastrService
    ){}

    ngOnInit() {
      // aquí puede inicializar el estado del componente
      this.cargarRazas();
    }

    cargarRazas(): void{
      this.razasService.lista().subscribe(data=>{
        this.razass=data;
      },
      err=>{
        console.log(err);
      }
      )
    }

    borrar(idraza: number) {
      this.razasService.delete(idraza).subscribe(
        data => {
          this.toastr.success('Raza Eliminada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarRazas();
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
        }
      );
    }

}
