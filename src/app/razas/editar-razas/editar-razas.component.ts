import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RazasService } from 'src/app/service/razas.service';
import { Razas } from '../../models/razas';
@Component({
  selector: 'app-editar-razas',
  templateUrl: './editar-razas.component.html',
  styleUrls: ['./editar-razas.component.css']
})
export class EditarRazasComponent implements OnInit{
  raza!: Razas
  constructor(
    private razasService: RazasService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,

  ) { }

  ngOnInit() {
    const idraza = this.activatedRoute.snapshot.params['idraza'];
    this.razasService.detail(idraza).subscribe(
      data => {
        this.raza = data;
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }
  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.razasService.update(id, this.raza).subscribe(
      data => {
        this.toastr.success('Raza Actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/lista-razas']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/lista-razas']);
      }
    );
  }


}
