import { formatDate } from '@angular/common';

import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { Address } from 'src/Class/Address';
import { CardDetails } from 'src/Class/CardDetails';
import { UserRegistration } from 'src/Class/UserRegistration';

import { UserService } from 'src/app/Services/user.service';

 

@Component({

  selector: 'app-user-profile',

  templateUrl: './user-profile.component.html',

  styleUrls: ['./user-profile.component.css']

})

export class UserProfileComponent implements OnInit{

constructor(private userService: UserService, private formBuilder:FormBuilder, private router : Router){}

states: string[] = [

  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa','Gujarat',

  'Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala','Madhya Pradesh','Maharashtra',

  'Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana',

  'Tripura','Uttar Pradesh','Uttarakhand','West Bengal'

];

cardDetails:CardDetails = new CardDetails();

  ngOnInit(){

    this.getUserProfile();

  }

  sideNavStatus:boolean=false;

  getUserProfile(){

    const userId = sessionStorage.getItem("ID");

   // const userId = "user1";

    this.userService.viewUserProfile(userId).subscribe({

      next:(data)=>{

        console.log(data.userRegistration.userName);

        this.cardDetails = data;

      },

      error:(error)=>{

 

      }

    });

}

 

showDiv1:boolean=false;

showDiv2:boolean=false;

 

 

dob:Date = new Date('10-09-2000');

formattedDate:any = formatDate(this.dob, 'yyyy-MM-dd', 'en-US');

address:Address = new Address('','','',0);

userRegistration:UserRegistration = new UserRegistration('',this.formattedDate,'','','','',this.address);

 

 

showDiv(divId:string){

  if(divId=='div1'){

     this.showDiv1=true;

     this.showDiv2=false;

    }

  if(divId=='div2'){

     this.showDiv2=true;

     this.showDiv1=false;

     const userId = sessionStorage.getItem("ID");

    //const userId = "user1";

    this.userService.getUserAddress(userId).subscribe({

      next:(data)=>{

        this.address = data;

      },

      error:(error)=>{

        console.log(error.error);

      }

    });

  }

    setTimeout(()=>{

      const element = document.getElementById(divId);

      if(element){

        element.scrollIntoView({behavior:'smooth', block:'start'});

      }

    }

    )

}

 

 

generatedOtp:number=0;

showSpinner:boolean=false;

showOtpForm:boolean=false;

errorFromDatabse:string="";

 

submitPhoneNoForm(){

  this.showSpinner = true;

  this.errorFromDatabse="";

  const userId = sessionStorage.getItem("ID");

 // const userId = "user1";

  this.userService.otpForUpdatePhoneNo(this.userRegistration,userId).subscribe({

    next:(data)=>{

      console.log(data);

      this.generatedOtp=data;

      this.showSpinner = false;

      this.showOtpForm = true;

      this.errorFromDatabse="";

    },

    error:(error)=>{

      console.log(error.error);

      this.errorFromDatabse=error.error;

    }

  })

 

}

 

userTypedOtp?:number;

errorMessage:string="";

submitOtpForm(){

  this.errorMessage="";

if(this.generatedOtp == this.userTypedOtp){

  this.errorMessage="";

   const userId = sessionStorage.getItem("ID");

 //  const userId = "user1";

  this.userService.updateUserPhoneNo(this.userRegistration,userId).subscribe({

    next:(data)=>{

      console.log(data);

      this.showDiv1=false;

      window.location.reload();

    },

    error:(error)=>{

      console.log(error.error);

    }

  });

}

else{

  this.errorMessage = "Otp doesn't match";

}

}

 

submitAddressForm(){

  const userId = sessionStorage.getItem("ID");

  //const userId = "user1";

  this.userService.updateUserAddress(this.address,userId).subscribe({

    next:(data)=>{

      console.log(data);

      this.showDiv2=false;

      window.location.reload();

    },

    error:(error)=>{

    console.log(error.error);

    }

  });

}

}