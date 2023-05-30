import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/usuario';
  constructor(private http: HttpClient) { }

  login(datosUsuario : any): Observable<any>{
    let params = new HttpParams()
    .set('username ', datosUsuario.username)
    .set('password', datosUsuario.password);
    return this.http.get<any[]>(this.url + "/login", { params: params });
  }
}
