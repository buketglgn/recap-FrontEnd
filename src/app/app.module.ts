import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { CarComponent } from './components/car/car.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrandComponent } from './components/brand/brand.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ColorComponent } from './components/color/color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarFilterComponent } from './components/car-filter/car-filter.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { LoginComponent } from './components/login/login.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RegisterComponent } from './components/register/register.component';

import { JwtModule } from '@auth0/angular-jwt';
import { AccountComponent } from './components/account/account.component';
import { RentacarComponent } from './components/rentacar/rentacar.component';
import { PaymentComponent } from './components/payment/payment.component';
import { FindexComponent } from './components/findex/findex.component';
import { RentedComponent } from './components/rented/rented.component';
import { DescriptionPipe } from './pipes/description.pipe';
import { FooterComponent } from './components/footer/footer.component';

export function tokenGetter() {
  return localStorage.getItem("token");
}




@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    CarComponent,
    BrandComponent,
    CustomerComponent,
    ColorComponent,
    CarDetailComponent,
    BrandFilterPipe,
    ColorFilterPipe,
    CarFilterComponent,
    AddBrandComponent,
    AddColorComponent,
    AddCarComponent,
    UpdateCarComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    RentacarComponent,
    PaymentComponent,
    FindexComponent,
    RentedComponent,
    DescriptionPipe,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    }),
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
      }
    }),
    
    
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
