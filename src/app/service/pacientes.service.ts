import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pacientes } from '../models/pacientes';
@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  pacientesURL= 'http://localhost:8080/pacientes/';
  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Pacientes[]>{
    return this.httpClient.get<Pacientes[]>(this.pacientesURL + 'lista');
  }

  public detail(idpaciente: number): Observable<Pacientes> {
    return this.httpClient.get<Pacientes>(this.pacientesURL + `detail/${idpaciente}`);
  }

  public save(paciente: Pacientes): Observable<any> {
    return this.httpClient.post<any>(this.pacientesURL + 'create', paciente);
  }

  public update(idpaciente: number, paciente: Pacientes): Observable<any> {
    return this.httpClient.put<any>(this.pacientesURL + `update/${idpaciente}`, paciente);
  }

  public delete(idpaciente: number): Observable<any> {
    return this.httpClient.delete<any>(this.pacientesURL + `delete/${idpaciente}`);
  }

}
