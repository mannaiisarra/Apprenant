import { DataResponseObject } from './../model/DataResponseObject';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Video  } from 'src/app/model/video';
import { HttpClient, HttpHeaders} from '@angular/common/http';
const API_URL = 'http://localhost:8083/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  getAllVideoByEtape(etape_id_etape:any): Observable<DataResponseObject<Video>> {
    return this.http.get<DataResponseObject<Video>>(API_URL +`/findVideo/${etape_id_etape}`);
  } 

  getVideoyId(id:any): Observable<DataResponseObject<Video>> {
    return this.http.get<DataResponseObject<Video>>(API_URL+'/findById/'+id);
  }
}
