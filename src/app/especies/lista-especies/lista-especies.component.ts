import { Component, OnInit } from '@angular/core';
import { EspeciesService } from 'src/app/service/especies.service';
import { Especies } from '../../models/especies';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-lista-especies',
  templateUrl: './lista-especies.component.html',
  styleUrls: ['./lista-especies.component.css']
})
export class ListaEspeciesComponent implements OnInit{
  especiemos: Especies[]=[];

  constructor(
    private especiesService: EspeciesService,
    private toastr: ToastrService
    ){}


    ngOnInit() {
      // aquí puede inicializar el estado del componente
      this.cargarEspecies();
    }

    cargarEspecies(): void{
      this.especiesService.lista().subscribe(data=>{
        this.especiemos=data;
      },
      err=>{
        console.log(err);
      }
      )
    }

    borrar(id: number) {
      this.especiesService.delete(id).subscribe(
        data => {
          this.toastr.success('Especie Eliminada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarEspecies();
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
        }
      );
    }
}



