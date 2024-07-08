import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { UserLogin } from 'src/Class/UserLogin';

import { UserService } from 'src/app/Services/user.service';


 

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit{

  constructor(private userService: UserService, private formBuilder:FormBuilder, private router : Router) {}

    ngOnInit(){

 

  }

 

  isPasswordValid(): boolean {

    const minLength = 8;

    const upperCaseRegex = /[A-Z]/;

    const lowerCaseRegex = /[a-z]/;

    const symbolRegex = /[@#$%^&+=]/;

    const numberRegex = /\d/;

  

    return (

      this.userLoginDetails.password.length >= minLength

    );

  }

 

  userLoginDetails:UserLogin = new UserLogin('','');

 

cardGetActivateLink:boolean=false;

 

  errorFromDatabse:string="";

  makeInputTagDisable:boolean=false;

  loginFormSubmit(){

    if(this.userLoginDetails.emailId=="shivam.admin@gmail.com" && this.userLoginDetails.password=="Admin@789"){

      alert("You are login as an admin");

      sessionStorage.setItem("isLoggedin","true");

      sessionStorage.setItem("ID","admin1");

      this.router.navigate(['/adminrequest']);
    }

    else{

      console.log(this.userLoginDetails);

    this.makeInputTagDisable=true;

    this.errorFromDatabse="";

    this.userService.userLogin(this.userLoginDetails).subscribe({

      next:(data)=>{

        console.log(data);

        this.errorFromDatabse="";

        sessionStorage.setItem("ID",data.userId);

        sessionStorage.setItem("isLoggedin","true");

        console.log("Successfully Logged in");

        this.router.navigate(['/home']);  //Redirect to home page

      },

      error:(error)=>{

        this.makeInputTagDisable=false;

        console.log(error.error);

        this.errorFromDatabse=error.error;

        if(error.error == "Please  add your card first for login."){

          this.userService.userLoginSession(this.userLoginDetails).subscribe({

            next:(data)=>{

              console.log("error present")

              sessionStorage.setItem("ID",data.userId);

              this.cardGetActivateLink=true;

            }

          });

        }

        else if(error.error == "Credentials are wrong."){

          this.userService.userLoginSession(this.userLoginDetails).subscribe({

            next:(data)=>{

              console.log("error present")

              sessionStorage.setItem("ID",data.userId);

            }

          });

        }

      }

    });

    }

    

  }

}
