import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PacientesService } from 'src/app/service/pacientes.service';
import { Pacientes } from '../../models/pacientes';
@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit{
  pacientess: Pacientes[]=[];

  constructor(
    private pacientesService: PacientesService,
    private toastr: ToastrService
    ){}

    ngOnInit() {
      // aquí puede inicializar el estado del componente
      this.cargarPacientes();
    }

    cargarPacientes(): void{
      this.pacientesService.lista().subscribe(data=>{
        this.pacientess=data;
      },
      err=>{
        console.log(err);
      }
      )
    }

    borrar(idpaciente: number) {
      this.pacientesService.delete(idpaciente).subscribe(
        data => {
          this.toastr.success('Paciente Eliminado', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.cargarPacientes();
        },
        err => {
          this.toastr.error(err.error.mensaje, 'Fail', {
            timeOut: 3000,  positionClass: 'toast-top-center',
          });
        }
      );
    }

}
