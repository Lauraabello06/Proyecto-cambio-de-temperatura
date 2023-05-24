import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private API_DATOS = 'http://localhost:8000/urlTemperature/';

  constructor(private http: HttpClient) { }

  public getAllCelsius(): Observable<any> {
    return this.http.get(this.API_DATOS);
  }

  public saveDatos(celsius: number): Observable<any> {
    const data = { celsius: celsius };
    return this.http.post(this.API_DATOS, data);
  }
}