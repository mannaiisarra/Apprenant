import { DataResponseObject } from './../model/DataResponseObject';
import { Formation } from './../model/formation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8082/formation';


@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http: HttpClient) { }

   getAll(): Observable<DataResponseObject<Formation>> {
    return this.http.get<DataResponseObject<Formation>>(API_URL +`/`);
  }

}