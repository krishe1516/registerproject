import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  registerPost(body:any){
     return this.http.post(`http://localhost:9090/saveUser`,body,{responseType:'text'})
  }
  getCountries(){
    return this.http.get(`http://localhost:9090/countries`)
  }
  getStates(countryId:number){
    return this.http.get(`http://localhost:9090/states/${countryId}`)
  }
  getCitys(stateId:number){
    return this.http.get(`http://localhost:9090/cities/${stateId}`)
  }
  forgotPass(id:number){
    return this.http.get(`http://15.206.171.20:9090/forgotPwd/${id}`)
  }
}
