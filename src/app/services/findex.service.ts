import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Findex } from '../models/findex';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class FindexService {

  apiUrl="https://localhost:44398/api/";
  constructor( private httpClient:HttpClient) { }

  add(findex:Findex):Observable<ResponseModel>{
    let newPath=this.apiUrl+"findexs/add"
    return this.httpClient.post<ResponseModel>(newPath,findex)
   }
   
   delete(findex:Findex):Observable<ResponseModel>{
    let newPath=this.apiUrl+"findexs/delete"
    return this.httpClient.post<ResponseModel>(newPath,findex)
   }

   update(findex:Findex):Observable<ResponseModel>{
    let newPath=this.apiUrl+"findexs/update"
    return this.httpClient.post<ResponseModel>(newPath,findex)
   }

   getFindexScoreByUserId(userId:number):Observable<ListResponseModel<Findex>>{
    let newPath=this.apiUrl+"findexs/getallbyuserid?userId="+userId
    return this.httpClient.get<ListResponseModel<Findex>>(newPath);

  }
}
