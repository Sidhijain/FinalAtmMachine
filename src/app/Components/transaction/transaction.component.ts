import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { TransactionDetails } from 'src/app/Interfaces/transaction-details';

import { TransactionDetailsService } from 'src/app/Services/transaction-details.service';

import { SelfTransferInfo } from 'src/app/dto/self-transfer-info';

 

@Component({
  
  selector: 'app-transaction',

  templateUrl: './transaction.component.html',

  styleUrls: ['./transaction.component.css']

})

export class TransactionComponent {

transactions:TransactionDetails[]=[];
sideNavStatus:boolean=false;
  message:string=""

  errorMessage:string=""

  // userId:string=""

  withdraw :SelfTransferInfo=new SelfTransferInfo("",0.0,0);

  isHide:boolean=false;

 

  constructor(private transactionDetailsService:TransactionDetailsService,private router:Router){}

  ngOnInit():void{

   //this.loadAllTransactionsToComponenet();
  const userId = sessionStorage.getItem("ID");
   this.getAllTransactionsById(userId);

  }

 

  getAllTransactionsById(userId:any){

    this.isHide=false;

    console.log(userId)

  this.transactionDetailsService.getAllTransactionById(userId).

  subscribe(

    {

      next:(data)=>{

        this.isHide=true;

      console.log(data);

      this.transactions=data;

      // this.transaction_details.getUsernameFromAccountNumber(data.fromAccountNumber);

      // this.transaction_details.getUsernameToAccountNumber(data.toAccountNumber);

      },

      error:(error)=>{

        console.log(error);

       },

       complete:()=>

       console.log("loaded all data")

 

    }

  );

  }

}
