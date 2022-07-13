import { DataResponseObject } from './../model/DataResponseObject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formation  } from 'src/app/model/formation';

const API_URL = 'http://localhost:8083/formation';
const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  token:string=localStorage.getItem(TOKEN_KEY);
  httpOptions = {
    headers:new HttpHeaders({
      'Authorization':`Bearer `+this.token
    })
  };

  constructor(private http: HttpClient) { }

   getAll(): Observable<DataResponseObject<Formation>> {
    return this.http.get<DataResponseObject<Formation>>(API_URL +`/`,this.httpOptions);
  }
  addFormation(data: any): Observable<DataResponseObject<Formation>> {
    return this.http.post<DataResponseObject<Formation>>(API_URL + '/add', data,this.httpOptions);
  }
  removeFormation(id: string): Observable<DataResponseObject<Formation>> {
    return this.http.delete<DataResponseObject<Formation>>(API_URL + '/deleteFormation/' + id,this.httpOptions);
  }

  getFormationbyId(id:any): Observable<DataResponseObject<Formation>> {
    return this.http.get<DataResponseObject<Formation>>(API_URL+'/findById/'+id,this.httpOptions);
  }
  updateUser(id: string, data: any): Observable<DataResponseObject<Formation>> {
    return this.http.put<DataResponseObject<Formation>>(API_URL +'/updateUser/'+ id, data,this.httpOptions);
  }
  
  FormationActive(data: any): Observable<DataResponseObject<Formation>> {
    return this.http.post<DataResponseObject<Formation>>(API_URL + '/active', data,this.httpOptions);
  }
  FormationNotActive(data: any): Observable<DataResponseObject<Formation>> {
    return this.http.post<DataResponseObject<Formation>>(API_URL + '/Notactive', data,this.httpOptions);
  }

  

}