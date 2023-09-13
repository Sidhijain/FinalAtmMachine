import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';



import { Observable } from 'rxjs';
import { UserRegistration } from 'src/Class/UserRegistration';
import { CardDetails } from 'src/Class/CardDetails';
import { UserLogin } from 'src/Class/UserLogin';
import { EmailDto } from 'src/Class/EmailDto';
import { Password } from 'src/Class/Password';
import { Address } from 'src/Class/Address';



@Injectable({

  providedIn: 'root'

})

export class UserService {



  private baseurl = "http://localhost:8090/";

  constructor(private httpClient: HttpClient) { }



  postProduct(userRegistration: UserRegistration): Observable<any> {

    return this.httpClient.post("http://localhost:8090/user/otp/", userRegistration);

  }



  saveUser(userRegistration: UserRegistration): Observable<any> {

    return this.httpClient.post("http://localhost:8090/user/", userRegistration);

  }

  saveCard(cardDetails: CardDetails, userId: any): Observable<any> {

    const url = `${this.baseurl}card/${userId}`;

    return this.httpClient.patch(url, cardDetails);

  }



  userLogin(userLoginDetails: UserLogin): Observable<any> {

    return this.httpClient.post("http://localhost:8090/user/login/", userLoginDetails);

  }



  userEmailVerifyForForgotPassword(userEmail: EmailDto, userId: any): Observable<any> {

    const url = `${this.baseurl}user/email/${userId}`;

    return this.httpClient.post(url, userEmail);

  }



  userResetPassword(resetPassword: Password, userId: any): Observable<any> {

    const url = `${this.baseurl}user/password/${userId}`;

    return this.httpClient.post(url, resetPassword);

  }



  viewUserProfile(userId: any): Observable<any> {

    const url = `${this.baseurl}user/profile/${userId}`;

    return this.httpClient.get(url, { responseType: 'json' });

  }



  otpForUpdatePhoneNo(userRegistration: UserRegistration, userId: any): Observable<any> {

    const url = `${this.baseurl}user/otp/phoneNo/${userId}`;

    return this.httpClient.patch(url, userRegistration);

  }



  updateUserPhoneNo(userRegistration: UserRegistration, userId: any): Observable<any> {

    const url = `${this.baseurl}user/phoneNo/${userId}`;

    return this.httpClient.patch(url, userRegistration);

  }



  getUserAddress(userId: any): Observable<any> {

    return this.httpClient.get("http://localhost:8090/address/" + userId);

  }



  updateUserAddress(address: Address, userId: any): Observable<any> {

    const url = `${this.baseurl}user/address/${userId}`;

    return this.httpClient.patch(url, address);

  }


  sendOtpForCardPin(userId:any):Observable<any>{

    return this.httpClient.get("http://localhost:8090/verify/user/pin/"+userId);

  }

 

  updateCardPin(cardDetails:CardDetails,userId:any):Observable<any>{

    const url = `${this.baseurl}user/pin/${userId}`;

    return this.httpClient.patch(url,cardDetails);

  }
  userLoginSession(userLoginDetails: UserLogin): Observable<any> {

    return this.httpClient.post("http://localhost:8090/user/session/", userLoginDetails);

  }





}

