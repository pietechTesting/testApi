import {Injectable} from '@angular/core';

@Injectable()
export class ConstantService {
  API_ENDPOINT: String;
  Login_Auth: String;
  cloudinarUpload = { // cloudinary credentials
    cloudName: 'impnolife',
    uploadPreset: 'mspqunld'
  };

  constructor() {
    this.Login_Auth = 'http://192.168.1.12:5000/'; // 'https://Apiclothing.herokuapp.com/'; //
    this.API_ENDPOINT = 'http://192.168.1.12:5000/api/';// 'https://Apiclothing.herokuapp.com/api/';//
  }

}
