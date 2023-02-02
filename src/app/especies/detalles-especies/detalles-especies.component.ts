import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EspeciesService } from 'src/app/service/especies.service';
import { Especies } from '../../models/especies';
@Component({
  selector: 'app-detalles-especies',
  templateUrl: './detalles-especies.component.html',
  styleUrls: ['./detalles-especies.component.css']
})
export class DetallesEspeciesComponent implements OnInit{
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
        this.volver();
      }
    );
  }

  volver(): void {
    this.router.navigate(['/lista-especies']);
  }


}
