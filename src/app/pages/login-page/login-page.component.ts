import { Component, OnInit } from '@angular/core';
import { userDetails } from '../../shared-Models/user.model';
import { register} from '../../shared-Models/register.model';
import { LoginService} from '../../services/login.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {tokenName} from '@angular/compiler';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers: [LoginService]
})
export class LoginPageComponent implements OnInit {
//   valForm: FormGroup;
//   loginForm: FormGroup;
//    masonryItems: any[];
//   // public userInfo: userDetails[] = []
//   // public  regDetail: register[] = [];
//   submitLogin() {
//     this.logService.login(this.loginForm.value).subscribe((loginCreds:any) => {
//       localStorage.setItem('token', 'bearer ' + loginCreds.token );
//       localStorage.setItem('email',  this.loginForm.value.email );
//       console.log('login success ' + JSON.stringify(loginCreds));
//       this.router.navigate(['clothing']);
//     }, (error) => {
//       console.log('error' + JSON.stringify(error));
//     });
//   }
//   onRegister() {
//     this.logService.register(this.valForm.value).subscribe((regDetails) => {
//       console.log('Resister Details' + JSON.stringify(regDetails));
//     }, (error) => {
//       console.log('error' + JSON.stringify(error));
//     });
//   }
//   constructor(public logService: LoginService, public fb: FormBuilder, public router: Router) {
//     this.masonryItems = [
//       { src: 'assets/img/loginBg.jpg',
//         w: 700, h: 500,
//         'title': 'New Seat',
//         'date': '27/6/2017' },
//       { src: 'assets/img/img2.jpg',
//         w: 700, h: 800,
//         'title': 'New Seat',
//         'date': '27/6/2017' },
//       { src: 'assets/img/loginBg.jpg',
//         w: 1000, h: 500,
//         'title': 'New Seat',
//         'date': '27/6/2017' },
//       { src: 'assets/img/loginBg.jpg',
//         w: 700, h: 1000,
//         'title': 'New Seat',
//         'date': '27/6/2017' },
//       { src: 'assets/img/img3.jpg',
//         w: 700, h: 500,
//         'title': 'New Seat',
//         'date': '27/6/2017' },
//       { src: 'assets/img/img2.jpg',
//         w: 900, h: 500,
//         'title': 'New Seat',
//         'date': '27/6/2017' },
//       { src: 'assets/img/loginBg.jpg',
//         w: 700, h: 600,
//         'title': 'New Seat',
//         'date': '27/6/2017' },
//       { src: 'assets/img/img1.jpg',
//         w: 1500, h: 1000,
//         'title': 'New Seat',
//         'date': '27/6/2017' },
//     ];
//     this.valForm = fb.group({
//       name: ['', Validators.required],
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//     this.loginForm = fb.group({
//       email: ['', Validators.required],
//       password: ['', Validators.required]
//     });
//
//   }
//
  ngOnInit() {
    }
}
