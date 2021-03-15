import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImagesByIdService {

  apiUrl="https://localhost:44398/api/"
  constructor(private httpClient:HttpClient) { }

  getCarImagesById(id:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl+"carImages/getImagesByCarId?id="+id
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
