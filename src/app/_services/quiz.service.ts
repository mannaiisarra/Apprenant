import { DataResponseObject } from './../model/DataResponseObject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz  } from 'src/app/model/quiz';

const API_URL = 'http://localhost:8083/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }





  getAllQuiz(): Observable<DataResponseObject<Quiz>> {
    return this.http.get<DataResponseObject<Quiz>>(API_URL +'/');
  }


  getquizById(id:any): Observable<DataResponseObject<Quiz>> {
    return this.http.get<DataResponseObject<Quiz>>(API_URL +`/getQuiz/` +id);
  } 
}