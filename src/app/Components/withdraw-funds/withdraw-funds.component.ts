import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { TransactionDetails } from 'src/app/Interfaces/transaction-details';

import { TransactionDetailsService } from 'src/app/Services/transaction-details.service';

import { SelfTransferInfo } from 'src/app/dto/self-transfer-info';

 

@Component({

  selector: 'app-withdraw-funds',

  templateUrl: './withdraw-funds.component.html',

  styleUrls: ['./withdraw-funds.component.css']

})

export class WithdrawFundsComponent {

  

 

 

  constructor(private transactionDetailsService:TransactionDetailsService,private router:Router){}

  sideNavStatus:boolean=false;

  transactions:TransactionDetails[]=[];

  message:string=""

  errorMessage:string=""

  // userId:string=""
  userId:any = sessionStorage.getItem("ID");

  hideInputTag:boolean = true;

  
  ngOnInit():void{
    }

  withdraw :SelfTransferInfo=new SelfTransferInfo(this.userId);

withdrawfunds(){

this.transactionDetailsService.withdrawfunds(this.withdraw).subscribe({

  next:(data)=>{

    console.log(data);

    this.message="Transaction Completed"

    this.errorMessage=""

    this.router.navigate(['/Transactions']);

    this.transactionDetailsService

  },

  error:(error)=>{

    console.log(error);

    this.errorMessage="Transaction Unsuccessful : " + error.error;

    this.message=""

  },

 

});
this.withdraw=new SelfTransferInfo();
  }
}
