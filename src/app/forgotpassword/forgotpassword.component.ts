import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private serv:LogoutService){}
  Logout=new FormGroup({
    emailId:new FormControl('',{
      validators:Validators.required,
      updateOn:'blur'
    })
  })
  ForgotOut(id:number){
   this.serv.forgotPass(id).subscribe((res)=>alert(res))
  }
}
