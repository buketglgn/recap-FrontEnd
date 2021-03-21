import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44398/api/";
  constructor(private httpClient:HttpClient) { }

  getrentals():Observable<ListResponseModel<Rental>>
  {
    let newPath=this.apiUrl+"rentals/getRentalDetails";
   return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

  add(rental:Rental):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"rentals/add",rental)
   }
  getRentalsByCarId(carId:number):Observable<ListResponseModel<Rental>>
  {
    let newPath=this.apiUrl+"getbycarid?carId="+carId;
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }

}
