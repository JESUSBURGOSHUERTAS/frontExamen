import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DuenosService } from 'src/app/service/duenos.service';
import { Duenos } from '../../models/duenos';
@Component({
  selector: 'app-detalles-duenos',
  templateUrl: './detalles-duenos.component.html',
  styleUrls: ['./detalles-duenos.component.css']
})
export class DetallesDuenosComponent implements OnInit{
  duenoss!: Duenos
  constructor(
    private duenosService: DuenosService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const idDuenos = this.activatedRoute.snapshot.params['idDuenos'];
    this.duenosService.detail(idDuenos).subscribe(
      data => {
        this.duenoss = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.volver();
      }
    );
  }
  volver(): void {
    this.router.navigate(['/lista-duenos']);
  }
}
