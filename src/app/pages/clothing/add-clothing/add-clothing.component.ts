import {Component, OnInit} from '@angular/core';
import {ClothingService} from '../../../services/clothing.service';
import {CloudinaryOptions, CloudinaryUploader} from 'ng2-cloudinary';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-clothing',
  templateUrl: './add-clothing.component.html',
  styleUrls: ['./add-clothing.component.css'],
  providers: [ClothingService, ToastrService]
})
export class AddClothingComponent implements OnInit {
  addProduct: FormGroup;
  Product = {
    title: '',
    shortDescription: '',
    imageUrl: ''
  };
  constructor(private clothingService: ClothingService, public fb: FormBuilder, private toaster: ToastrService, private route: Router) {
  }

  url1: any = './assets/img/girl.jpg';
  uploader: CloudinaryUploader = new CloudinaryUploader(
    new CloudinaryOptions(this.clothingService.cloudinarUpload)
  );

  readUrl1(event) { // to display selected image as a thumb
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url1 = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  onAddProduct() {
    this.Product.title = this.addProduct.value.title;
    this.Product.shortDescription = this.addProduct.value.shortDescription;
    // this.Product.imgPath = this.addProduct.value.imgPath;
    console.log(this.Product);
    this.uploader.uploadAll();
    this.uploader.onSuccessItem = (item: any, response: any, status: number, headers: any): any => {
      let res: any = JSON.parse(response);
      this.Product.imageUrl = res.secure_url;
      console.log(this.Product.imageUrl );
      this.clothingService.postProducts(this.Product)
        .subscribe((response:any) => {
          console.log('post successful ' + JSON.stringify(response));
          this.toaster.success('Product Added Successfully!', 'Success!');
          this.route.navigate(['/clothing']);

        }, (error) => {
          this.toaster.error(error.message, 'ERROR');
        });
    };
  }
  ngOnInit() {
    this.addProduct = this.fb.group({
      title: [null, Validators.required],
      shortDescription: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(20)]]
    });
  }

}
