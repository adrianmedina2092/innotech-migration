import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//OTHERS
import { Filters } from '../models/core.interface';

@Injectable({
  providedIn: 'root',
})
export class FiltrosService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      /* Authorization: 'Bearer ' + sessionStorage.getItem('sessionToken'), */
    }),
  };

  constructor(private _http: HttpClient) {}

  getFilters(data: Filters) {
    return this._http.post(
      'https://innotechs3.sss.dev.corp/S3RestAPI/filtros',
      data,
      this.httpOptions
    );
  }
}
