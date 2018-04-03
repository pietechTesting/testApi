import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConstantService} from '../services/constant.service';

@Injectable()
export class ClothingService {
  cloudinarUpload:any;
  constructor(private http: HttpClient, private constService: ConstantService ) {
    this.cloudinarUpload = constService.cloudinarUpload;
  }
  getCategories() {
   return this.http.get(this.constService.API_ENDPOINT + 'categories');
  }
  getProductById(id) {
    return this.http.get(this.constService.API_ENDPOINT + 'categories/' + id);
  }
  postProducts(productData) {
    const body = productData;
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', localStorage.getItem('token'));
    return this.http.post(this.constService.API_ENDPOINT + 'categories', body, {
      headers: headers
    });
  }
  productsUpdate(id, updatedData) {
    const body = updatedData;
    const headers = new HttpHeaders()
                    .set('Content-Type', 'application/json')
                    .set('Authorization', localStorage.getItem('token'));
    return this.http.put(this.constService.API_ENDPOINT + 'categories/' + id, body, {
      headers: headers
    });
  }
  deleteProduct(id: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', localStorage.getItem('token'));
      return this.http.delete(this.constService.API_ENDPOINT + 'categories/' + id, {
        headers: headers
    });

  }
}
