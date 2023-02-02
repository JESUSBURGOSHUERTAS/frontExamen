import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { RazasService } from 'src/app/service/razas.service';
import { Razas } from '../../models/razas';
import { Especies } from 'src/app/models/especies';
@Component({
  selector: 'app-nuevo-razas',
  templateUrl: './nuevo-razas.component.html',
  styleUrls: ['./nuevo-razas.component.css']
})
export class NuevoRazasComponent implements OnInit{
  nombreRaza = '';


  constructor(
    private razasService: RazasService,
    private toastr: ToastrService,
    private router: Router
    ) { }

    ngOnInit() {

    }
    // onCreate(): void {
    //   const raza = new Razas(this.nombreRaza, this.especies);
    //   this.razasService.save(raza).subscribe(
    //   data => {
    //   this.toastr.success('Raza Creada', 'OK', {
    //   timeOut: 3000, positionClass: 'toast-top-center'
    //   });
    //   this.router.navigate(['/lista-razas']);
    //   },
    //   err => {
    //   this.toastr.error(err.error.mensaje, 'Fail', {
    //   timeOut: 3000, positionClass: 'toast-top-center',
    //   });
    //   this.router.navigate(['/']);
    //   }
    //   );
    //   }
}
