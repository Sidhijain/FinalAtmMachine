import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ElectricityBillDto } from 'src/Class/ElectricityBillDto';
import { DthBill } from 'src/Class/dth-bill';

@Injectable({

  providedIn: 'root'

})

export class BillPaymentService {

 

  constructor(private httpClient: HttpClient) { }

 

  getVendorsListByType(vendorName: string): Observable<any> {

    return this.httpClient.get("http://localhost:8090/vendors/" + vendorName, { responseType: "json" });

  };

 

  createTransaction(amount: number,userId:any) {

    return this.httpClient.get("http://localhost:8090/create/transaction/"+amount+"/"+userId);

  }

 

  payDTHAmount(dthBill: DthBill,userId:any): Observable<any> {

    return this.httpClient.post("http://localhost:8090/vendor/amount/dth/"+userId, dthBill,{headers:{'Content-type':'application/json'},responseType:"text"});

  }

  payElectricityAmount(electricityBill: ElectricityBillDto,userId:any): Observable<any> {

    return this.httpClient.post("http://localhost:8090/vendor/amount/electricity/"+userId, electricityBill,{headers:{'Content-type':'application/json'},responseType:"text"});

  }

 

 

  payDthBill(vendorName:string,dthBill: DthBill,userId:any) :Observable<any>{

    return this.httpClient.post("http://localhost:8090/dth/bill/"+vendorName+"/"+userId, dthBill,{headers:{'Content-type':'application/json'},responseType:"text"});

  }

 

  payElectricityBill(vendorName:string,electricityBill: ElectricityBillDto,userId:any): Observable<any> {

    return this.httpClient.post("http://localhost:8090/electricity/bill/"+vendorName+"/"+userId, electricityBill,{headers:{'Content-type':'application/json'},responseType:"text"});

  }

 

 

}