import { DataResponseObject } from './../model/DataResponseObject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demande } from 'src/app/model/demande';
import { Formation } from 'src/app/model/formation';

const API_URL = 'http://localhost:8083/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  constructor(private http: HttpClient) { }

  getAllDemandeByUsers(id:any): Observable<DataResponseObject<Demande>> {
    return this.http.get<DataResponseObject<Demande>>(API_URL +`/allDemandeByUsers/${id}`);
  } 

  getActive(id:any): Observable<DataResponseObject<Demande>> {
    return this.http.get<DataResponseObject<Demande>>(API_URL +`/active/${id}/true`);
  } 

  getAllFormationActiveByUser(id:any): Observable<DataResponseObject<Demande>> {
    return this.http.get<DataResponseObject<Demande>>(API_URL +`/formation/${id}/true`);
  }
  AllFormationByUser(id:any): Observable<DataResponseObject<Demande>> {
    return this.http.get<DataResponseObject<Demande>>(API_URL +`/AllFormation/${id}`);
  }  

  addFormation(formation_id:any,users_id:any,data: any): Observable<DataResponseObject<Formation>> {
    return this.http.post<DataResponseObject<Formation>>(API_URL + '/add', data);
  }
  addDemande(data: any,formationn_id:any,users_id:any): Observable<DataResponseObject<Demande>> {
    return this.http.post<DataResponseObject<Demande>>(API_URL + `/addDemande/${formationn_id}/${users_id}` , data);
  }

}
