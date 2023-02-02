import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Razas } from '../models/razas';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RazasService {
  razasURL= 'http://localhost:8080/razas/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Razas[]>{
    return this.httpClient.get<Razas[]>(this.razasURL + 'lista');
  }

  public detail(id: number): Observable<Razas>{
    return this.httpClient.get<Razas>(this.razasURL + `detail/${id}`);
  }

  public detailName(nombre: string): Observable<Razas>{
    return this.httpClient.get<Razas>(this.razasURL + `detailname/${nombre}`);
  }

  public save(razas: Razas): Observable<any>{
    return this.httpClient.post<any>(this.razasURL + 'create', razas);
  }

  public update(id: number, razas: Razas): Observable<any>{
    return this.httpClient.put<any>(this.razasURL + `update/${id}`, razas);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.razasURL + `delete/${id}`);
  }

}
