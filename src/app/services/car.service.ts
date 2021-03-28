import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';
import { CarOriginal } from '../models/carOriginal';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  // /cars/carDetails
  apiUrl="https://localhost:44398/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/carDetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
  getCarDetailById(carId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/GetCarDetailById?carId="+carId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
    
    
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+ "cars/carsDetailsByBrandId?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+ "cars/getcarsbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);

  }
  getCarsByBrandIdandColorId(brandId:number, colorId:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"cars/getbybrandidandcolorid?brandId="+brandId+"&colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  add(car:CarOriginal):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cars/add"
    return this.httpClient.post<ResponseModel>(newPath,car)
   }

   update(car:CarOriginal):Observable<ResponseModel>{
    let newPath=this.apiUrl+"cars/update"
    return this.httpClient.post<ResponseModel>(newPath,car)
   }
}
