import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Pacientes } from '../../models/pacientes';
import { PacientesService } from '../../service/pacientes.service';
@Component({
  selector: 'app-detalles-pacientes',
  templateUrl: './detalles-pacientes.component.html',
  styleUrls: ['./detalles-pacientes.component.css'],
})
export class DetallesPacientesComponent implements OnInit {
  paciente!: Pacientes;

  constructor(
    private pacienteService: PacientesService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    const idpaciente = this.activatedRoute.snapshot.params['id'];
    this.pacienteService.detail(idpaciente).subscribe(
      (data) => {
        this.paciente = data;
      },
      (err) => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/lista-pacientes']);
  }
}
