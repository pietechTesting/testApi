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
    this.Login_Auth = 'https://Apiclothing.herokuapp.com/'; // 'http://192.168.1.12:5000/';  //
    this.API_ENDPOINT = 'https://Apiclothing.herokuapp.com/api/'; // 'http://192.168.1.12:5000/api/'; //
  }

}
