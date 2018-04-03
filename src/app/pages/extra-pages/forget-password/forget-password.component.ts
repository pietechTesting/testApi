import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../../services/login.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
  providers: [LoginService]
})
export class ForgetPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  reset() {
    this.loginService.forgetPassword(this.passwordForm.value).subscribe(Password => {
      // this.forgetPassword.password = Password;
      console.log(Password);
    }, (error) => {
      console.log(error);
    } );
   }
  constructor(public loginService: LoginService, public fb: FormBuilder) {
    this.passwordForm = fb.group({
      email: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

}
