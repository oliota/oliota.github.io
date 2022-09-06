import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  apiUrl: string = 'http://localhost:8080/sistema';
  oliotaCom: string = 'https://oliota.herokuapp.com';
  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<any>(this.apiUrl + '/tasks/');
  }

  getMenu() {
    return this.http.get<any>(this.apiUrl + '/menu/');
  }
  getCursos() {
    return this.http.get<any>(this.oliotaCom + '/cursos/all');
  }
}
