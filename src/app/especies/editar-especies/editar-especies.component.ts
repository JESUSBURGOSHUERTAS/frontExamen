import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Especies } from 'src/app/models/especies';
import { EspeciesService } from 'src/app/service/especies.service';
@Component({
  selector: 'app-editar-especies',
  templateUrl: './editar-especies.component.html',
  styleUrls: ['./editar-especies.component.css']
})
export class EditarEspeciesComponent implements OnInit{
  especie!: Especies
  constructor(
    private especiesService: EspeciesService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.especiesService.detail(id).subscribe(
      data => {
        this.especie = data;
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
    this.especiesService.update(id, this.especie).subscribe(
      data => {
        this.toastr.success('Especie Actualizada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    );
  }

}
