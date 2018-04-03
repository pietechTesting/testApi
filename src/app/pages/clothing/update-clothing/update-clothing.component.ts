import { Component, OnInit } from '@angular/core';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ClothingService} from '../../../services/clothing.service';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-update-clothing',
  templateUrl: './update-clothing.component.html',
  styleUrls: ['./update-clothing.component.css'],
  providers: [ClothingService]

})
export class UpdateClothingComponent implements OnInit {
 public  productDetails: {
   title: '',
   shortDescription: '',
   imageUrl: '',
 };
 public id:any;
  constructor( private clothingService: ClothingService, private route: ActivatedRoute, private router: Router, private toaster: ToastrService) {
    this.route.params.subscribe( params => {
      this.id = params.id;
    });
  }
  ngOnInit() {
    this.onClick();
  }
  onClick() {
    this.clothingService.getProductById(this.id).subscribe((data: any) => {
      this.productDetails = data;
      // this.productDetails.shortDescription = data.shortDescription;
      // this.productDetails.imageUrl = data.imageUrl;
      console.log(data);
    }, (error) => {
      console.log(error);
    });
  }
  updateHere() {
    this.clothingService. productsUpdate(this.id,this.productDetails)
      .subscribe((res: any) => {
      this.toaster.success('Data updated successfully');
      this.router.navigate(['/clothing']);
    }, (error) => {
      this.toaster.error('something went wrong');
    });
  }
}
