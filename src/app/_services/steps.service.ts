import { DataResponseObject } from './../model/DataResponseObject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etape } from 'src/app/model/etape';



const API_URL = 'http://localhost:8083/etape';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  constructor(private http: HttpClient) { }

  getEtapeByTheme(id:any): Observable<DataResponseObject<Etape>> {
    return this.http.get<DataResponseObject<Etape>>(API_URL+'/chercher/'+id);
  }
}
