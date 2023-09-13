import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { SelfTransferInfo } from '../dto/self-transfer-info';
import { FundTransferInfo } from '../dto/fund-transfer-info';
import { UserInfo } from '../dto/user-info';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {
baseurl="http://localhost:8090/";
  constructor(private httpClient:HttpClient) { } 
  getAllTransactions():Observable<any>{
    return this.httpClient.get("http://localhost:8090/transactions/",{responseType:"json"});
  }

  getAllTransactionById(userId:any):Observable<any>{
    const url=`${this.baseurl}transactions/${userId}`
    return this.httpClient.get(url,{responseType:"json"});
  }

  getUsername(accountNumber:Number):Observable<any>{
    return this.httpClient.get("http://localhost:8090/username/"+accountNumber,{responseType:"text"});
  }
  withdrawfunds(selfTransferInfo:SelfTransferInfo):Observable<any>{
    return this.httpClient.post("http://localhost:8090/selfwithdraw/funds/",selfTransferInfo,{headers:{'Content-type':'application/json'},responseType:"text"})
  }
 
  addfunds(selfTransferInfo:SelfTransferInfo):Observable<any>{
    return this.httpClient.post("http://localhost:8090/fund/deposit",selfTransferInfo,{headers:{'Content-type':'application/json'},responseType:"text"})
  }

  fundsTransfer(fundTransferInfo:FundTransferInfo):Observable<any>{
    return this.httpClient.post("http://localhost:8090/funds/transfer/",fundTransferInfo,{headers:{'Content-type':'application/json'},responseType:"text"})
  }
  
  checkBalances(userInfo:UserInfo):Observable<any>{
    return this.httpClient.post("http://localhost:8090/account/balance/",userInfo,{headers:{'Content-type':'application/json'},responseType:"text"})
  
  }
}
