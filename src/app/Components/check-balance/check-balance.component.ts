import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { TransactionDetails } from 'src/app/Interfaces/transaction-details';

import { TransactionDetailsService } from 'src/app/Services/transaction-details.service';

import { UserInfo } from 'src/app/dto/user-info';

 

@Component({

  selector: 'app-check-balance',

  templateUrl: './check-balance.component.html',

  styleUrls: ['./check-balance.component.css']

})

export class CheckBalanceComponent {
  sideNavStatus:boolean=false;
  
  transactions:TransactionDetails[]=[];

  message:string=""

  errorMessage:string=""

  userId:any=sessionStorage.getItem("ID");

hideInputTag:boolean=true;

  checkBalance:UserInfo=new UserInfo(this.userId);

 

 

  constructor(private transactionDetailsService:TransactionDetailsService,private router:Router){}

  ngOnInit():void{

   //this.loadAllTransactionsToComponenet();

   

  }

  checkBalances(){

this.transactionDetailsService.checkBalances(this.checkBalance).subscribe({

  next:(data)=>{

    console.log(data);

    this.message="Balance : "+data

    this.errorMessage=""

    this.transactionDetailsService

  },

  error:(error)=>{

    console.log(error);

    this.errorMessage="Could not fetch your Balance,please check after sometime: " + error.error;

    this.message=""

  },

 

});

this.checkBalance=new UserInfo ();

  }

 

 

}

