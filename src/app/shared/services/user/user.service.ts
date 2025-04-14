import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseUrl } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  signIn(data:any): Observable<any> {
    return this.httpClient.post(`${BaseUrl}/users/signIn`,data)
  }
  signUp(data:any): Observable<any> {
    return this.httpClient.post(`${BaseUrl}/users/signUp`,data)
    
  }
}
