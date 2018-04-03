import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../../services/login.service';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {tokenName} from '@angular/compiler';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [LoginService, ToastrService]
})
export class HeaderComponent implements OnInit {
  public userDetails: {}[];
  loginBtn = true;
  welcome = false;
  valForm: FormGroup;
  loginForm: FormGroup;
  masonryItems: any[];
  // public userInfo: userDetails[] = []
  // public  regDetail: register[] = [];
  submitLogin() {
    this.logService.login(this.loginForm.value).subscribe((loginCreds: any) => {
      localStorage.setItem('token', 'bearer ' + loginCreds.token );
      localStorage.setItem('email',  this.loginForm.value.email );
      console.log('login success ' + JSON.stringify(loginCreds));
      this.toaster.success('Data updated successfully');
      this.logService.getUserInfo().subscribe((userInfo:any) => {
         this.userDetails = userInfo;
         console.log( userInfo);
      })
      this.router.navigate(['clothing/add']);
      this.welcome = true;
      this.loginBtn = false;
    }, (error) => {
      console.log('error' + JSON.stringify(error));
      this.toaster.error('error arrived');
    });
  }
  onRegister() {
    this.logService.register(this.valForm.value).subscribe((regDetails) => {
      console.log('Resister Details' + JSON.stringify(regDetails));
    }, (error) => {
      console.log('error' + JSON.stringify(error));
    });
  }
  constructor(public logService: LoginService, public fb: FormBuilder, public router: Router, public toaster:ToastrService) {
    this.masonryItems = [
      { src: 'assets/img/loginBg.jpg',
        w: 700, h: 500,
        'title': 'New Seat',
        'date': '27/6/2017' },
      { src: 'assets/img/img2.jpg',
        w: 700, h: 800,
        'title': 'New Seat',
        'date': '27/6/2017' },
      { src: 'assets/img/loginBg.jpg',
        w: 1000, h: 500,
        'title': 'New Seat',
        'date': '27/6/2017' },
      { src: 'assets/img/loginBg.jpg',
        w: 700, h: 1000,
        'title': 'New Seat',
        'date': '27/6/2017' },
      { src: 'assets/img/img3.jpg',
        w: 700, h: 500,
        'title': 'New Seat',
        'date': '27/6/2017' },
      { src: 'assets/img/img2.jpg',
        w: 900, h: 500,
        'title': 'New Seat',
        'date': '27/6/2017' },
      { src: 'assets/img/loginBg.jpg',
        w: 700, h: 600,
        'title': 'New Seat',
        'date': '27/6/2017' },
      { src: 'assets/img/img1.jpg',
        w: 1500, h: 1000,
        'title': 'New Seat',
        'date': '27/6/2017' },
    ];
    this.valForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
  }


}
