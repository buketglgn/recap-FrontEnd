import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/customer';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44398/api";
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseModel<Customer>>{
    let newPath=this.apiUrl+"/customers/GetCustomersDetail";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  getCustomersByUserId(userId:number):Observable<SingleResponseModel<Customer>>{
    let newPath=this.apiUrl+"/customers/getbyid?id="+userId
    return this.httpClient.get<SingleResponseModel<Customer>>(newPath);
  }
}
