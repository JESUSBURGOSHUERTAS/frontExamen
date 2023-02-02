import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DuenosService } from 'src/app/service/duenos.service';
import { Duenos } from '../../models/duenos';
@Component({
  selector: 'app-nuevo-duenos',
  templateUrl: './nuevo-duenos.component.html',
  styleUrls: ['./nuevo-duenos.component.css']
})
export class NuevoDuenosComponent implements OnInit{
  nombre = '';
  tipoIdentificacion = '';
  identificacion = '';
  ciudad = '';
  direccion = '';
  telefono = '';
  fechaRegistro: Date = new Date(); // Esto fijará un valor por defecto para la fecha de registro en caso de que el usuario no seleccione una fecha en el input.


  constructor(
    private duenosService: DuenosService,
    private toastr: ToastrService,
    private router: Router
    ) { }


  ngOnInit() {

  }

  onCreate(): void {
    const dueno = new Duenos(this.nombre, this.tipoIdentificacion, this.identificacion, this.ciudad, this.direccion, this.telefono, this.fechaRegistro);
    this.duenosService.save(dueno).subscribe(
      data => {
        this.toastr.success('Dueño Creado', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista-duenos']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/lista-duenos']);
      }
    );
  }
}
