import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {FileUploadModule} from 'ng2-file-upload';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {HeaderComponent} from './pages/layout/header/header.component';
import {ConstantService} from './services/constant.service';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { AddClothingComponent } from './pages/clothing/add-clothing/add-clothing.component';
import {ToastrModule} from 'ngx-toastr';
import { UpdateClothingComponent } from './pages/clothing/update-clothing/update-clothing.component';
import { MultiselectDropdownModule } from 'angular-4-dropdown-multiselect';
import { ForgetPasswordComponent } from './pages/extra-pages/forget-password/forget-password.component';

const appRoutes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'clothing', component: ClothingComponent},
  {path: 'clothing/add', component: AddClothingComponent},
  {path: 'clothing/update/:id', component: UpdateClothingComponent},
  {path: 'clothing/forgetPassword', component: ForgetPasswordComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HeaderComponent,
    ClothingComponent,
    AddClothingComponent,
    UpdateClothingComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FormsModule,
    MultiselectDropdownModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2CloudinaryModule,
    FileUploadModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ConstantService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
