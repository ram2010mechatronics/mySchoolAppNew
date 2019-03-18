import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { LoginRes } from '../login/loginres';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};



@Injectable()
export class ApiService {

    tokenUrl = 'https://localhost:9444/oauth2/token';

    constructor(private http: HttpClient) { }

  login(loginPayload): Observable<LoginRes> {
    return this.http.post<LoginRes>(this.tokenUrl, loginPayload, httpOptions);
  }

}
