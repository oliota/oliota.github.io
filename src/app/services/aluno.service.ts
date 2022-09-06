import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  //apiUrl: string = 'http://localhost:8080/aluno';
  apiUrl: string = 'http://localhost:123';
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.apiUrl );
  }
  
  getById(id:string) {
    return this.http.get<any>(this.apiUrl + '/'+id);
  }
  
  create(aluno:any) {
    return this.http.post<any>(this.apiUrl ,aluno);
  }

  update(id:string,aluno:any) {
    return this.http.put<any>(this.apiUrl+ '/'+id ,aluno);
  }
  delete(id:string) {
    return this.http.delete<any>(this.apiUrl + '/'+id);
  }
}
