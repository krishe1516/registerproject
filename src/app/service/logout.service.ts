import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private http:HttpClient) { }

  forgotPass(id:number){
    return this.http.get(`http://15.206.171.20:9090/forgotPwd/${id}`,{responseType:'text'})
  }
}
