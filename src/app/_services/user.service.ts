import { Injectable } from '@angular/core';
import { Users } from 'src/app/model/users';
import { Dataresponse } from './../model/Dataresponse';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = 'http://localhost:8082/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
   getAll(): Observable<Dataresponse<Users>> {
    return this.http.get<Dataresponse<Users>>(API_URL +'/');
  }
  register(username: string, email: string, password: string, phone:string, adress:string) :Observable<any> {
    return this.http.post(API_URL + '/signup', {
      username,
      email,
      password,
      phone,
      adress
      
    }, httpOptions);
  }
  removeOrder(id: string): Observable<Dataresponse<Users>> {
    return this.http.delete<Dataresponse<Users>>(API_URL + '/deleteUser/' + id);
  }

  getUser(id:any): Observable<Dataresponse<Users>> {
    return this.http.get<Dataresponse<Users>>(API_URL+'/findById/'+id);
  }

  updateUser(id: string, data: any): Observable<Dataresponse<Users>> {
    return this.http.put<Dataresponse<Users>>(API_URL +'/updateUser/'+ id, data);
  }
  // addUser(data: any): Observable<Dataresponse<Users>> {
  //   return this.http.post<Dataresponse<Users>>(API_URL, data);
  // }
  addCategory(data: any): Observable<Dataresponse<Users>> {
    return this.http.post<Dataresponse<Users>>(API_URL + '/signup', data);
  }

}