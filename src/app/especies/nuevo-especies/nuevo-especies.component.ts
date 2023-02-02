import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { EspeciesService } from 'src/app/service/especies.service';
import { Especies } from '../../models/especies';
@Component({
  selector: 'app-nuevo-especies',
  templateUrl: './nuevo-especies.component.html',
  styleUrls: ['./nuevo-especies.component.css']
})
export class NuevoEspeciesComponent implements OnInit{
  nombre = '';

  constructor(
    private especiesService: EspeciesService,
    private toastr: ToastrService,
    private router: Router
    ) { }

    ngOnInit() {

    }

    onCreate(): void {
      const especies = new Especies(this.nombre);
      this.especiesService.save(especies).subscribe(
        data => {
          this.toastr.success('Especie Creada', 'OK', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.router.navigate(['/lista-especies']);
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
