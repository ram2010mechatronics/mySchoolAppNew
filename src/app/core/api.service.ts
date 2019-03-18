import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/index';
import { LoginRes } from '../login/loginres';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    Authorization: 'Basic aUt6cUFJQW5uVjR1eGNSQ1RJNTdVWkpYYURNYTpZZmJrQ0F4OGJtN3dHSmxHZ1lxamtmR3RJRVlh',
    'Access-Control-Allow-Headers': '*'
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
