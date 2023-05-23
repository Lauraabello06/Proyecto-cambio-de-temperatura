import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
//link donde traigo los datos
  private API_DATOS =  'http://localhost:8000/urlTemperature/';
  
  constructor(private http: HttpClient) { }

  //Petición get
  public getAllCelsius(): Observable<any>{
    return this.http.get(this.API_DATOS)
  }

  //Peticion Post
  public saveDatos (celsius:any): Observable<any>{
    return this.http.post(this.API_DATOS,celsius);
  }
}
