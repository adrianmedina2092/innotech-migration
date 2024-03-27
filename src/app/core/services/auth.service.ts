import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/core.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  private isAuthenticated: boolean = false;

  constructor(private _http: HttpClient) {}

  isAuthenticatedUser(value: boolean): void {
    this.isAuthenticated = value;
  }

  getIsAuth(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Método encargado del login del portal
   * @param data Login
   * @returns Observable
   */
  authenticate(data: Login) {
    return this._http.post(
      `${environment.umBackendUrl}/user/external-login`,
      data,
      this.httpOptions
    );
  }

  validateToken(data: any) {
    return this._http.post(`${environment.backendUrl}/auth/validate`, data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  sessionCheck(){
    return this._http.post(`${environment.backendUrl}/auth/token`, {}, )
  }
}
