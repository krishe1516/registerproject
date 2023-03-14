import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UnlockService } from '../service/unlock.service';

@Component({
  selector: 'app-unlock-account',
  templateUrl: './unlock-account.component.html',
  styleUrls: ['./unlock-account.component.css']
})
export class UnlockAccountComponent {
  constructor(private serv: UnlockService, private formbuild: FormBuilder) { }
  Unlock = new FormGroup({
    email: new FormControl('',  Validators.required),
    tempPwd: new FormControl('', Validators.required),
    newPwd: new FormControl('', Validators.required),
    confirmPwd: new FormControl('', Validators.required)
  }
  )
  unlock:any={};

  unlockOut() {
    this.serv.unlockAcc(this.Unlock.value).subscribe((res: any) => alert(res))
  }
}
