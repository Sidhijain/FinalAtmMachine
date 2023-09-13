import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from 'src/Class/Request';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  private baseurl = "http://localhost:8090/";
  constructor(private httpCLient:HttpClient) { }
  getRequestOfUser(userId:any):Observable<any>{
    return this.httpCLient.get("http://localhost:8090/requests/"+userId,{responseType:"json" });
  }
  deleteRequest(id:string):Observable<any>{
    return this.httpCLient.delete("http://localhost:8090/request/"+id,{responseType:"json" });
  }
  addRequest(newRequest:Request,userId:any):Observable<any>{
    const url=`${this.baseurl}request/${userId}`;
    return this.httpCLient.post(url,newRequest);
  }
  updateRequest(newRequest:Request,userId:any):Observable<any>{
    const url=`${this.baseurl}request/${userId}`;
    return this.httpCLient.put(url,newRequest);
  }
  getCardType(userId:any):Observable<any>{
    return this.httpCLient.get("http://localhost:8090/request/cardtype/"+"user1",{responseType:"json" });
  }
  
}
