import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userFormat } from './http-form/user'

import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ServiceFolderService {
  Url = "http://jsonplaceholder.typicode.com/users"


  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<userFormat[]>(this.Url)
  }
  delete(id:number){
    const urlData=`${this.Url}/${id}`
    return this.http.delete(urlData,httpOptions)

  }
  update(data:object,id:number){
    const urlData=`${this.Url}/${id}`
    return this.http.put(urlData,data,httpOptions)
  }
  add(data:object){
   return this.http.post<userFormat[]>(this.Url,data,httpOptions) 
  }
  getInfo(id:number){
    return this.http.get<userFormat[]>(`${this.Url}/${id}`)

  }

}
