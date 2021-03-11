import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44398/api/rentals/getRentalDetails";
  constructor(private httpClient:HttpClient) { }

  getrentals():Observable<RentalResponseModel>
  {
   return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
