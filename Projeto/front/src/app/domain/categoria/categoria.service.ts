import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Categoria } from './categoria';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  url = `${environment.urlApi}/categoria`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.url}`);
  }

  findById(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.url}/${id}`);
  }

  save(categoria: Categoria): Observable<Categoria> {
    if(categoria.id){
      return this.http.put<Categoria>(`${this.url}`, JSON.stringify(categoria), httpOptions);
    } else {
      return this.http.post<Categoria>(`${this.url}`, JSON.stringify(categoria), httpOptions);
    }
  }

  deteleById(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}