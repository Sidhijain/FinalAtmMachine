import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { TransactionDetails } from 'src/app/Interfaces/transaction-details';

import { TransactionDetailsService } from 'src/app/Services/transaction-details.service';

import { SelfTransferInfo } from 'src/app/dto/self-transfer-info';

 

@Component({

  selector: 'app-add-funds',

  templateUrl: './add-funds.component.html',

  styleUrls: ['./add-funds.component.css']

})

export class AddFundsComponent {

  sideNavStatus:boolean=false;

  transactions:TransactionDetails[]=[];

  message:string=""

  errorMessage:string=""

  // userId:string=""

  
  userId:any = sessionStorage.getItem("ID");
  
  
  
  constructor(private transactionDetailsService:TransactionDetailsService,private router:Router){}
  
  ngOnInit():void{
    
    //this.loadAllTransactionsToComponenet();
    
  }

  hideInputTag:boolean = true;
  addFund :SelfTransferInfo=new SelfTransferInfo(this.userId);

  addfunds(){

    this.transactionDetailsService.addfunds(this.addFund).subscribe({

      next:(data)=>{

        console.log("component"+data);

        this.message="Transaction Completed"

        this.errorMessage=""

        this.transactionDetailsService

        this.router.navigate(['/Transactions']);

      },

      error:(error)=>{

        console.log(error);

        this.errorMessage="Transaction Unsuccessful : "+error.error;

        this.message=""

      },

   

    });

    this.addFund=new SelfTransferInfo();

      }

 

}

 