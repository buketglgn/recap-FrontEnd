import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { LoginModel } from '../models/loginModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/tokenModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl="https://localhost:44398/api/auth"
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel):Observable<SingleResponseModel<TokenModel>>{
    let newPath=this.apiUrl+"/login";
    return this.httpClient.post<SingleResponseModel<TokenModel>>(newPath,loginModel)
  }

  isAuthenticated(){
    //eger localStorage ta token varsa
    if(localStorage.getItem("token")){
      return true
    }
    else{
      return false;
    }
  }
}
