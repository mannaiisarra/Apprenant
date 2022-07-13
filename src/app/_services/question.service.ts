import { DataResponseObject } from './../model/DataResponseObject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Question  } from 'src/app/model/question';
import { Quiz  } from 'src/app/model/quiz';
const API_URL = 'http://localhost:8083/question';

const USER_KEY = 'auth-user';
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }



  getQuestion(id:any): Observable<DataResponseObject<Question>> {
    return this.http.get<DataResponseObject<Question>>(API_URL+'/findallByid/'+id);
  }  


  getAll(): Observable<DataResponseObject<Question>> {
    return this.http.get<DataResponseObject<Question>>(API_URL +'/');
  }

  // evaluateQuiz(data:any): Observable<DataResponseObject<Question>> {
  //   return this.http.get<DataResponseObject<Question>>(API_URL +'/evaluate-quiz',data);
  // }

  evaluateQuiz(id:any,data:any): Observable<DataResponseObject<Question>> {
    return this.http.post<DataResponseObject<Question>>(API_URL +  '/evaluatequiz/'+id, data);
  }

}