import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import { CardDetails } from 'src/Class/CardDetails';

import { UserService } from 'src/app/Services/user.service';


 

@Component({

  selector: 'app-card-registration',

  templateUrl: './card-registration.component.html',

  styleUrls: ['./card-registration.component.css']

})

export class CardRegistrationComponent implements OnInit{

  constructor(private userService: UserService, private formBuilder:FormBuilder, private router : Router){}

  

  cardDetails:CardDetails = new CardDetails();

 

  ngOnInit(): void{

    this.userIdForSaveCard = sessionStorage.getItem("ID");

    this.userService.viewUserProfile(this.userIdForSaveCard).subscribe({

      next:(data)=>{

        console.log(data);

        this.cardDetails = data;

        this.cardDetails.amount = 2000;

      },

      error:(error)=>{

        console.log(error.error);

      }

    });

  }

 

  

  sendingPinSpinner:boolean=false;

  errorFromDatabase:string="";

  userIdForSaveCard:any="";

  cardSubmit(){

    this.sendingPinSpinner=true;

    this.errorFromDatabase="";

   // console.log(this.cardDetails.accountNumber+"---"+this.cardDetails.cardNumber+"------"+this.cardDetails.amount);

   this.userIdForSaveCard = sessionStorage.getItem("ID");

    this.userService.saveCard(this.cardDetails,this.userIdForSaveCard).subscribe({

        next:(data)=>{

          console.log(data);

          this.errorFromDatabase="";

          this.router.navigate(['/login']);

        },

        error:(error)=>{

          this.sendingPinSpinner=false;

          console.log("Error -> "+error.error);

          this.errorFromDatabase = error.error;

        }

      });

 

  }

}

