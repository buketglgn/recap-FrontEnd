import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { FindexComponent } from './components/findex/findex.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { RegisterComponent } from './components/register/register.component';
import { RentacarComponent } from './components/rentacar/rentacar.component';
import { RentedComponent } from './components/rented/rented.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/car-detail/:id", component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/rentacar/:id",component:RentacarComponent, canActivate:[LoginGuard]},
  {path:"cars/brand/add", component:AddBrandComponent},
  {path:"cars/color/add", component:AddColorComponent},
  {path:"cars/add", component:AddCarComponent, canActivate:[AdminGuard]},
  {path:"cars/update/:id", component:UpdateCarComponent,canActivate:[AdminGuard]},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"account",component:AccountComponent},
  {path:"payment", component:PaymentComponent},
  {path:"findex", component:FindexComponent},
  {path:"rented", component:RentedComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
