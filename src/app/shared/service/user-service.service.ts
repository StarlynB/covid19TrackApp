import { HttpClient } from '@angular/common/http';
import { Injectable, Input, OnInit } from '@angular/core';
import { Observable, delay, of, switchMap } from 'rxjs';
import { userLoginDTO } from '../models/userLogin';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService implements OnInit {

  constructor(public http: HttpClient) { }

  ngOnInit(): void {

  }

  setLoggedIn(value: boolean) {
    localStorage.setItem('isLoggedIn', value + '');
  }

  getLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';

  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }


  //#region loginUserService
  loginUserService(url: string, data: string): Observable<any> {
    return of(null).pipe(delay(2000), switchMap(() => {
      return this.http.post(url, data);
    }));
  }

  //#endregion

}
