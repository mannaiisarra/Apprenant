import { DataResponseObject } from './../model/DataResponseObject';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme  } from 'src/app/model/theme';

const API_URL = 'http://localhost:8083/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private http: HttpClient) { }


  getThemeByFormation(id:any): Observable<DataResponseObject<Theme>> {
    return this.http.get<DataResponseObject<Theme>>(API_URL+'/chercher/'+id);
  }
}
