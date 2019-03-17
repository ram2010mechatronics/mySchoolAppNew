import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/index';
import { LoginRes } from '../login/loginres';

@Injectable()
export class ApiService {

    baseUrl = '';

    constructor(private http: HttpClient) { }

  login(loginPayload): Observable<LoginRes> {
    return this.http.post<LoginRes>(this.baseUrl, loginPayload);
  }

}
