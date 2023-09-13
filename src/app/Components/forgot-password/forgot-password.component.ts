import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { EmailDto } from 'src/Class/EmailDto';
import { Password } from 'src/Class/Password';


import { UserService } from 'src/app/Services/user.service';
@Component({

  selector: 'app-forgot-password',

  templateUrl: './forgot-password.component.html',

  styleUrls: ['./forgot-password.component.css']

})

export class ForgotPasswordComponent implements OnInit{

  constructor(private userService: UserService, private formBuilder:FormBuilder, private router : Router){}

  ngOnInit(): void{

    console.log("forgot email");

  }

  isPasswordValid(): boolean {

    const minLength = 8;

    const upperCaseRegex = /[A-Z]/;

    const lowerCaseRegex = /[a-z]/;

    const symbolRegex = /[@#$%^&+=]/;

    const numberRegex = /\d/;

  

    return (

      this.userResetPassword.password.length >= minLength &&

      upperCaseRegex.test(this.userResetPassword.password) &&

      lowerCaseRegex.test(this.userResetPassword.password) &&

      symbolRegex.test(this.userResetPassword.password) &&

      numberRegex.test(this.userResetPassword.password)

    );

  }

 

  userForgotPasswordEmail:EmailDto = new EmailDto('');

 

  userResetPassword:Password = new Password('','');

 

  generatedOtp:number=0;

  showOtpForm:boolean=false;

  showConfirmPasswordFrom:boolean=false;

 

  otpSendingSpinner:boolean=false;

  errorFromDatabase:string="";

  getUserSessionId:any="";

  submitEmailForm(){

    console.log(this.userForgotPasswordEmail);

    this.getUserSessionId = sessionStorage.getItem("ID");

    this.otpSendingSpinner = true;

    this.errorFromDatabase = "";

    this.userService.userEmailVerifyForForgotPassword(this.userForgotPasswordEmail,this.getUserSessionId).subscribe({

      next:(data)=>{

        console.log("OTP email verify frogot password -> "+data);

        this.generatedOtp=data;

        this.errorFromDatabase="";

        this.showOtpForm=true;

        this.otpSendingSpinner = false;

      },

      error:(error)=>{

        this.otpSendingSpinner = false;

        this.errorFromDatabase = error.error;

        console.log(error); console.log(error.error);

      }

    });

  }

 

  //OTP form submission

userTypedOtp?:number;

  errorMessage:string="";

  submitOtpForm(){

    this.errorMessage="";

    if(this.userTypedOtp==this.generatedOtp){

      this.showConfirmPasswordFrom=true;

      this.errorMessage="";

      console.log("Inside "+this.userTypedOtp);

      console.log("Login successfully");

    }

    else{

      this.errorMessage="OTP doesn't match";

    }

  }

 

  //set password

  passwordNotMatchMessage:string="";

// inputTag:boolean=false;

  passwordSubmit(){

   // this.inputTag=true;

    console.log(this.userResetPassword);

    this.passwordNotMatchMessage="";

    if(this.userResetPassword.password == this.userResetPassword.cpassword){

      this.passwordNotMatchMessage="";

      this.getUserSessionId = sessionStorage.getItem("ID");

      this.userService.userResetPassword(this.userResetPassword,this.getUserSessionId).subscribe({

        next:(data)=>{

          console.log(data);

          this.router.navigate(['/login']);

        },

        error:(error)=>{

          console.log(error.error);

        }

      })

 

    }

    else{

      this.passwordNotMatchMessage="Password not matched.";

    }

  }

}