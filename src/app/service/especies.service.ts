import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Especies } from '../models/especies';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EspeciesService {
  especiesURL= 'http://localhost:8080/especies/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Especies[]>{
    return this.httpClient.get<Especies[]>(this.especiesURL + 'lista');
  }

  public detail(id: number): Observable<Especies> {
    return this.httpClient.get<Especies>(this.especiesURL + `detail/${id}`);
  }


  public detailName(nombre: string): Observable<Especies>{
    return this.httpClient.get<Especies>(this.especiesURL + `detailname/${nombre}`);
  }

  public save(especies: Especies): Observable<any>{
    return this.httpClient.post<any>(this.especiesURL + 'create', especies);
  }

  public update(id: number, especies: Especies): Observable<any>{
    return this.httpClient.put<any>(this.especiesURL + `update/${id}`, especies);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.especiesURL + `delete/${id}`);
  }

}
