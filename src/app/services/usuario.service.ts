import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  apiUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.get<any>(this.apiUrl + '/login/'+username+"/"+password);
  }
}
