import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private serv: RegisterService) { }

  Register = new FormGroup({
    cityId: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    countryId: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    dob: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    email: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    fname: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    gender: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    lname: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
    phno: new FormControl('', {
      validators: (Validators.required,Validators.minLength(10)),
      updateOn: 'blur'
    }),
    stateId: new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    }),
  })
  regOutput() {
    this.serv.registerPost(this.Register.value).subscribe((res) => alert((res)))
  }

  CountryForm: any;
  countries: any;
  states: any;
  cities: any;

  get_Country() {
    this.serv.getCountries().subscribe((data) => this.countries = data);

  }
  ForgotOut(id:number){
    this.serv.forgotPass(id).subscribe((res)=>console.log(res))
   }

  onChangeCountry(countryId: number) {
    this.serv.getStates(countryId).subscribe((data) => this.states = data)
  }

  onChangeState(stateId: number) {
    this.serv.getCitys(stateId).subscribe((data) => this.cities = data)
  }
  ngOnInit() {
    this.get_Country();
  }

}
