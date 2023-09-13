import { formatDate } from '@angular/common';

import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

import { Router } from '@angular/router';
import { Address } from 'src/Class/Address';
import { UserRegistration } from 'src/Class/UserRegistration';
import { OtpGeneration } from 'src/Class/OtpGeneration';

 

@Component({

  selector: 'app-user-registration',

  templateUrl: './user-registration.component.html',

  styleUrls: ['./user-registration.component.css']

})

export class UserRegistrationComponent implements OnInit{

  constructor(private UserService: UserService, private formBuilder:FormBuilder, private router : Router){}

  ngOnInit(): void{

  }

  states: string[] = [

    'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',

    'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra',

    'Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',

    'Tripura','Uttar Pradesh','Uttarakhand','West Bengal'

  ];

 

  isPasswordValid(): boolean {

    const minLength = 8;

    const upperCaseRegex = /[A-Z]/;

    const lowerCaseRegex = /[a-z]/;

    const symbolRegex = /[@#$%^&+=]/;

    const numberRegex = /\d/;

  

    return (

      this.userRegistration.password.length >= minLength &&

      upperCaseRegex.test(this.userRegistration.password) &&

      lowerCaseRegex.test(this.userRegistration.password) &&

      symbolRegex.test(this.userRegistration.password) &&

      numberRegex.test(this.userRegistration.password)

    );

  }

 

 

//this variable is basically when to show otp form

showOtpForm:boolean=false;

otpSendingSpinner:boolean=false;

 

dob:Date = new Date('10-09-2000');

formattedDate:any = formatDate(this.dob, 'yyyy-MM-dd', 'en-US');

address:Address = new Address('','','',0);

userRegistration:UserRegistration = new UserRegistration('',this.formattedDate,'','','','',this.address);

// address:Address = new Address('405/8 Nai Basti Sant Talkies','Firozabad','Uttar Pradesh',283203);

// userRegistration:UserRegistration = new UserRegistration('Krati',this.formattedDate,'+919760286311','krativarshney789@gmail.com','Krati@123','Krati@123',this.address,907534321955);

 

userTypedOtp:OtpGeneration = new OtpGeneration();

 

errorFromDatabase:string = "";

passwordNotMatchMessage:string="";

userEmailOtp?:number;

userSmsOtp?:number;

generatedOtp:number=0;

ageMustBeGreaterThatEighteen:string="";

 

 

  onSubmit(){

    this.errorFromDatabase="";

    //this is today date

    const today = new Date();

    console.log("user date of birth : "+this.userRegistration.userDOB);

    console.log("Todays Date : "+today);

    const userDOB = new Date(this.userRegistration.userDOB);

    var ageDiffer = today.getFullYear() - userDOB.getFullYear();

    if (today.getMonth() < userDOB.getMonth() || (today.getMonth() === userDOB.getMonth() && today.getDate() < userDOB.getDate())) {

      ageDiffer--;

    }

    if (ageDiffer >= 18) {

      this.errorFromDatabase="";

      if(this.userRegistration.password == this.userRegistration.confirmPassword){

        this.passwordNotMatchMessage="";

        this.otpSendingSpinner=true;

        this.errorFromDatabase="";

      console.log(this.userRegistration);

      console.log(this.userRegistration.aadharNumber);

      console.log(this.userRegistration.phoneNo);

      this.UserService.postProduct(this.userRegistration).subscribe({

        next:(data)=>{

          console.log(data);

          this.userEmailOtp = data.emailOtp;

          this.userSmsOtp = data.phoneNumberOtp;

          this.otpSendingSpinner = false;

         this.showOtpForm = true;

         this.errorFromDatabase="";

        },

        error:(error)=>{

          this.otpSendingSpinner=false;

          console.log("Error -> "+error.error);

          this.errorFromDatabase = error.error;

        }

      });

      }

      else{

       this.passwordNotMatchMessage = "Password Should be matchched";

      }

    }

    else{

      this.ageMustBeGreaterThatEighteen="Sorry! your age is under 18."

    }

    

    

}

 

  errorMessage:string="";

  submitOtpForm(){

    console.log(this.userEmailOtp);

    this.errorMessage="";

    if(this.userTypedOtp.emailOtp==this.userEmailOtp && this.userTypedOtp.phoneNumberOtp==this.userSmsOtp){

      this.otpSendingSpinner=true;

      this.errorMessage="";

      console.log("Inside "+this.userTypedOtp);

      console.log("Login successfully");

      this.UserService.saveUser(this.userRegistration).subscribe({

        next:(data)=>{

          console.log(data);

          this.otpSendingSpinner=false;

          sessionStorage.setItem("ID",data.userId);

          this.router.navigate(['/card']);

        },

        error:(error)=>{

          console.log(error);

        }

      })

    }

    else{

      this.errorMessage="OTP doesn't match";

    }

  }

 

}