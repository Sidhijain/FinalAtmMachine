import { Component } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { CardDetails } from 'src/Class/CardDetails';
import { UserService } from 'src/app/Services/user.service';

 

@Component({

  selector: 'app-change-user-pin',

  templateUrl: './change-user-pin.component.html',

  styleUrls: ['./change-user-pin.component.css']

})

export class ChangeUserPinComponent {

  constructor(private userService: UserService, private formBuilder:FormBuilder, private router : Router){}

  

  generatedOtp:number=0;

  showOtpForm:boolean=false;

  verifyemail(){

    this.showOtpForm=true;

    const userId = sessionStorage.getItem("ID");

    this.userService.sendOtpForCardPin(userId).subscribe({

      next:(data)=>{

        console.log(data);

        this.showOtpForm=true;

        this.generatedOtp = data;

      },

      error:(error)=>{

        console.log(error.error);

        this.showOtpForm=false;

      }

    });

  }

 

 

  userTypedOtp?:number;

  showPinForm:boolean=false;

  errorMessage:string="";

  submitOtpForm(){

    if(this.userTypedOtp==this.generatedOtp){

      this.errorMessage="";

      this.showPinForm=true;

      this.showOtpForm=false;

    }

    else{

      this.errorMessage="OTP doesn't match.";

    }

    

  }

 

cardDetails:CardDetails = new CardDetails();

successMessage:boolean=false;

 

confirmPIN?:number;

  submitPinForm(){

    this.errorMessage="";

    if(this.confirmPIN == this.cardDetails.cardPin){

      this.errorMessage="";

      this.successMessage = true;

      const userId = sessionStorage.getItem("ID");

 

      this.userService.updateCardPin(this.cardDetails,userId).subscribe({

        next:(data)=>{

          console.log(data);

          this.showOtpForm=false;

          this.showPinForm=false;

        },

        error:(error)=>{

          console.log(error.error);

        }

        

      });

    }

    else{

      this.errorMessage="Confirm Pin should be matched.";

    }

  }

 

 

}