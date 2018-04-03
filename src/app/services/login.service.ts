import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {ConstantService} from '../services/constant.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient, private constService: ConstantService  ) { }
  login(loginData) {
    const body = loginData;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.constService.Login_Auth + 'auth/local', body, {
      headers: headers
    });
  }

  register(register) {
    const body = register;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.constService.API_ENDPOINT + 'users/', body, { headers: headers});
  }

  getUserInfo() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', localStorage.getItem('token'));
    return this.http.get(this.constService.API_ENDPOINT + 'users/me', {
      headers: headers
    });
  }
  forgetPassword(email) {
    const body = email;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.constService.API_ENDPOINT + 'users/password/otp', body, { headers: headers});
  }
}
