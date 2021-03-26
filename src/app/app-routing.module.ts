import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBrandComponent } from './components/add-brand/add-brand.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { AddColorComponent } from './components/add-color/add-color.component';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarComponent } from './components/car/car.component';
import { LoginComponent } from './components/login/login.component';
import { RentalComponent } from './components/rental/rental.component';
import { UpdateCarComponent } from './components/update-car/update-car.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brands/:brandId", component:CarComponent},
  {path:"cars/colors/:colorId", component:CarComponent},
  {path:"cars/car-detail/:id", component:CarDetailComponent},
  {path:"cars/filter/:brandId/:colorId",component:CarComponent},
  {path:"cars/rental/:id",component:RentalComponent, canActivate:[LoginGuard]},
  {path:"cars/brand/add", component:AddBrandComponent},
  {path:"cars/color/add", component:AddColorComponent},
  {path:"cars/add", component:AddCarComponent, canActivate:[LoginGuard]},
  {path:"cars/update/:id", component:UpdateCarComponent},
  {path:"login", component:LoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
