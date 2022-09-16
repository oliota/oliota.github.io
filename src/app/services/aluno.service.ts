import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  apiUrl: string = 'http://localhost:8080/alunos'; 
  constructor(private http: HttpClient) {}

  getAll():Observable<any> {
    return this.http.get<any>(this.apiUrl );
  }
  
  getById(aluno:any):Observable<any> {
    return this.http.get<any>(this.apiUrl + '/'+aluno.id );
  }
  
  create(aluno:any):Observable<any> {
    return this.http.post<any>(this.apiUrl ,aluno);
  }

  update(aluno:any):Observable<any> {
    return this.http.put<any>(this.apiUrl+ '/'+aluno.id ,aluno);
  }
  delete(aluno:any):Observable<any> {
    return this.http.delete<any>(this.apiUrl + '/'+aluno.id);
  }
}
