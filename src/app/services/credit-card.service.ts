import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreditCard } from '../models/creditCard';
import { ResponseModel } from '../models/responseModel';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { UserModel } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl="https://localhost:44398/api/";
  constructor(private httpClient:HttpClient) { }

  add(creditCard:CreditCard):Observable<ResponseModel>{
    let newPath=this.apiUrl+"creditCards/add"
    return this.httpClient.post<ResponseModel>(newPath,creditCard)
   }
   
   delete(creditCard:CreditCard):Observable<ResponseModel>{
    let newPath=this.apiUrl+"creditCards/delete"
    return this.httpClient.post<ResponseModel>(newPath,creditCard)
   }

   update(creditCard:CreditCard):Observable<ResponseModel>{
    let newPath=this.apiUrl+"creditCards/update"
    return this.httpClient.post<ResponseModel>(newPath,creditCard)
   }

   getCreditCardByUserId(userId:number):Observable<ListResponseModel<CreditCard>>{
    let newPath=this.apiUrl+"creditCards/getallbyuserid?userId="+userId
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);

  }
}
