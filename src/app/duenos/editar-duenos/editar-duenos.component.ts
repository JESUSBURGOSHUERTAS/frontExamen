import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DuenosService } from 'src/app/service/duenos.service';
import { Duenos } from '../../models/duenos';
@Component({
  selector: 'app-editar-duenos',
  templateUrl: './editar-duenos.component.html',
  styleUrls: ['./editar-duenos.component.css']
})
export class EditarDuenosComponent {
  dueno!: Duenos
  constructor(
    private duenosService: DuenosService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }
  ngOnInit() {
    const idDueno = this.activatedRoute.snapshot.params['idDueno'];
    this.duenosService.detail(idDueno).subscribe(
      data => {
        this.dueno = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/lista-duenos']);
      }
    );
  }
  onUpdate(): void {
    const idDueno = this.activatedRoute.snapshot.params['idDueno'];
    this.duenosService.update(idDueno, this.dueno).subscribe(
      data => {
        this.toastr.success('Dueño Actualizado', 'OK', {
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
