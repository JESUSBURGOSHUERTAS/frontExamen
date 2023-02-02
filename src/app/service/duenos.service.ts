import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Duenos } from '../models/duenos';
@Injectable({
  providedIn: 'root'
})
export class DuenosService {
  duenosURL= 'http://localhost:8080/duenos/';
  constructor(private httpClient: HttpClient) { }


  public lista(): Observable<Duenos[]>{
    return this.httpClient.get<Duenos[]>(this.duenosURL + 'lista');
  }

  public detail(idDueno: number): Observable<Duenos> {
    return this.httpClient.get<Duenos>(this.duenosURL + `detail/${idDueno}`);
  }

  public save(dueno: Duenos): Observable<any> {
    return this.httpClient.post<any>(this.duenosURL + 'create', dueno);
  }

  public update(idDueno: number, dueno: Duenos): Observable<any> {
    return this.httpClient.put<any>(this.duenosURL + `update/${idDueno}`, dueno);
  }

  public delete(idDueno: number): Observable<any> {
    return this.httpClient.delete<any>(this.duenosURL + `delete/${idDueno}`);
  }

}
