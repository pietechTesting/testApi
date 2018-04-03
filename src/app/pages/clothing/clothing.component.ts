import {Component, OnInit} from '@angular/core';
import {ClothingService} from '../../services/clothing.service';
import {Router} from '@angular/router';
import { IMultiSelectOption } from 'angular-4-dropdown-multiselect';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';
import * as url from 'url';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import { LoginService} from '../../services/login.service';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css'],
  providers: [ClothingService,  LoginService]
})
export class ClothingComponent implements OnInit {
  valForm: FormGroup;
  loginForm: FormGroup;
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  masonryItems = [
    {  src: 'assets/img/new1.jpg',
      w: 700, h: 100,
      'title': 'New Seat',
      'date': '27/6/2017' },
    {  src: 'assets/img/new2.jpg',
      w: 700, h: 500,
      'title': 'New Seat',
      'date': '27/6/2017'},
    {  src: 'assets/img/new3.jpg',
      w: 700, h: 200,
      'title': 'New Seat',
      'date': '27/6/2017' },
  ];
  public category: {}[];
  constructor(private clothingService: ClothingService, private route: Router, public logService: LoginService, public fb: FormBuilder) {
    this.valForm = fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
  this.myOptions = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
  ];
    this.onClick();
}
onClick() {
  this.clothingService.getCategories().subscribe((res: any ) => {
    this.category = res;
    console.log(res);
  }, (error) => {
    console.log(error);
  });
}
  onUpdate(key) {
    this.route.navigate(['clothing/update', key]);
  }
  onDelete(Id: any, index: any) {
    console.log('deleted');
    console.log(Id);
     this.clothingService.deleteProduct(Id).subscribe((res) => {
       this.category.splice(Id);
     });
  }
  onChange() {
    console.log(this.optionsModel);
  }
//upload img
  onRegister() {
    this.logService.register(this.valForm.value).subscribe((regDetails) => {
      console.log('Resister Details' + JSON.stringify(regDetails));
    }, (error) => {
      console.log('error' + JSON.stringify(error));
    });
  }

}
