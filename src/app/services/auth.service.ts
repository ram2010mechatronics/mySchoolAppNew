import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRes } from '../login/loginres';
import {Router} from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
    // 'Content-Type':  'application/json'
    Authorization: 'Basic aUt6cUFJQW5uVjR1eGNSQ1RJNTdVWkpYYURNYTpZZmJrQ0F4OGJtN3dHSmxHZ1lxamtmR3RJRVlh',
    'Access-Control-Allow-Headers': '*'
  })
};



@Injectable()
export class AuthService {

  tokenUrl = 'http://localhost:8083/oauth2/token';


    constructor(private http: HttpClient, private router: Router) { }

  login(body): Observable<LoginRes> {
    return this.http.post<LoginRes>(this.tokenUrl, body, httpOptions);
    // login(body): Observable<LoginRes> {
    //   return this.http.post<LoginRes>(this.tokenUrl, body, httpOptions);
  }

  loginRequest(body): Observable<HttpResponse<Response>> {
    return this.http.post<HttpResponse<Response>>(this.tokenUrl, body, {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
         Authorization: 'Basic aUt6cUFJQW5uVjR1eGNSQ1RJNTdVWkpYYURNYTpZZmJrQ0F4OGJtN3dHSmxHZ1lxamtmR3RJRVlh',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
      })
    });
  }


  loginRequestNew(body): Observable<any> {
     return this.http.post(this.tokenUrl, body , {
      headers: new HttpHeaders({
        'Content-Type':  'application/x-www-form-urlencoded',
         Authorization: 'Basic aUt6cUFJQW5uVjR1eGNSQ1RJNTdVWkpYYURNYTpZZmJrQ0F4OGJtN3dHSmxHZ1lxamtmR3RJRVlh',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
      }),
      observe: 'response'}); }

  get isLoggedIn(): boolean {
        const  user  =  localStorage.getItem('token');
        if (user  !==  null) {
        return true;
        }
        return false;
     }

  public logout() {
      // await this.afAuth.auth.signOut();
      localStorage.removeItem('token');
      this.router.navigate(['loginpage']);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token  !==  null) {
      return true;
      }
    return false;
  }

}
