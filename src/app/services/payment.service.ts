import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../models/cartItem';
import { CartItems } from '../models/cartItems';
import { Payment } from '../models/payment';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl="https://localhost:44398/api/";
  constructor(private httpClient : HttpClient) { }

  addPayment(payment:Payment) : Observable<ResponseModel>{
    let newPath = this.apiUrl + "payments/add"
    return this.httpClient.post<ResponseModel>(newPath, payment);
  }

  addToCart(rental:Rental){
    let cartItem = new CartItem();
    cartItem.rental = rental;
    CartItems.push(cartItem);
  }

  listCart(): CartItem[]{
    return CartItems;
  }
}
