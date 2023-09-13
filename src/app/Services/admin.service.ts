import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AdminRemark } from 'src/Class/AdminRemark';
import { CardLimit } from 'src/Class/CardLimit';





 

@Injectable({

  providedIn: 'root'

})

export class AdminService {

 

  constructor(private httpClient: HttpClient) { }

 

  getAllPendingRequests(): Observable<any> {

    return this.httpClient.get("http://localhost:8090/admin/requests", { responseType: "json" });

  }

 

  getAllCardLostRequests(request:string): Observable<any> {

    return this.httpClient.get("http://localhost:8090/admin/users/request/"+request,  { responseType: "json" });

  }

 

  approveRequest(reqId: string): Observable<any> {

    return this.httpClient.patch("http://localhost:8090/admin/request/status/" + reqId, { responseType: "json" });

  }

 

  setRemark(adminRemark: AdminRemark, reqId: string): Observable<any> {

    console.log("in service:" + adminRemark);

    console.log(adminRemark);

    console.log("in service:" + reqId);

    return this.httpClient.patch("http://localhost:8090/admin/adminremark/" + reqId, adminRemark, { headers: { 'Content-type': 'application/json' }, responseType: "text" });

  }

 

  

 

  setCardLimit(cardLimit: CardLimit): Observable<any> {

    return this.httpClient.patch("http://localhost:8090/admin/cardlimit/", cardLimit, { headers: { 'Content-type': 'application/json' }, responseType: "text" });

  }

 

  getTransactionData(): Observable<any> {

    return this.httpClient.get("http://localhost:8090/admin/transaction", { responseType: "json" });

  }

 

}

