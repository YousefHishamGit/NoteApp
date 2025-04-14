import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { BaseUrl } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient:HttpClient) { }
  addnote(data:any): Observable<any> {
    return this.httpClient.post(`${BaseUrl}/notes`,data)
  }
  getNotes(): Observable<any> {
    return this.httpClient.get(`${BaseUrl}/notes`)
  }
  updateNote(id:string,data:any): Observable<any> {
    return this.httpClient.put(`${BaseUrl}/notes/${id}`,data)
  }
  deleteNote(id:string): Observable<any> {
    return this.httpClient.delete(`${BaseUrl}/notes/${id}`)
  }

}
