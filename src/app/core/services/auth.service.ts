import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/core.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor(private _http: HttpClient) {}

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  authenticate(data: Login) {
    this._http.post('', data, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }
}
