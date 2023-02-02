import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RazasService } from 'src/app/service/razas.service';
import { Razas } from '../../models/razas';

@Component({
  selector: 'app-detalles-razas',
  templateUrl: './detalles-razas.component.html',
  styleUrls: ['./detalles-razas.component.css']
})
export class DetallesRazasComponent implements OnInit{
  raza!: Razas

  constructor(
    private razasService: RazasService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    this.razasService.detail(id).subscribe(
      data => {
        this.raza = data;
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
    this.router.navigate(['/lista-razas']);
  }
}
