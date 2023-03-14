import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Login:FormGroup=new FormGroup({
    email:new FormControl('',{
      validators:Validators.required,
      updateOn:'blur'}),
    pwd:new FormControl('',{
      validators:Validators.required,
      updateOn:'blur'})
  })

  constructor(private serv:LoginService){
    this.loginOutput()
  }
object:any;
  loginOutput(){
    this.serv.loginData(this.Login.value).subscribe((res:any)=>alert(res))
  }
}
