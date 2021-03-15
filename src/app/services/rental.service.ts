import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44398/api/rentals/getRentalDetails";
  constructor(private httpClient:HttpClient) { }

  getrentals():Observable<ListResponseModel<Rental>>
  {
   return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl);
  }
}
