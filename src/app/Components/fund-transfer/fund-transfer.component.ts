

import { Component, afterNextRender } from '@angular/core';

import { Router } from '@angular/router';

import { TransactionDetails } from 'src/app/Interfaces/transaction-details';

import { TransactionDetailsService } from 'src/app/Services/transaction-details.service';

import { FundTransferInfo } from 'src/app/dto/fund-transfer-info';

 

@Component({

  selector: 'app-fund-transfer',

  templateUrl: './fund-transfer.component.html',

  styleUrls: ['./fund-transfer.component.css']

})

export class FundTransferComponent {

  sideNavStatus:boolean=false;
 

  transactions:TransactionDetails[]=[];

  message:string=""

  errorMessage:string=""

  userId:any= sessionStorage.getItem("ID");

  accNo?:number;

hideInputTag:boolean=true;

  fundTransfer :FundTransferInfo=new FundTransferInfo(0,this.userId);
  name:String="";

 

 

  constructor(private transactionDetailsService:TransactionDetailsService,private router:Router){}

  ngOnInit():void{

   //this.loadAllTransactionsToComponenet();

  }
  fundsTransfer(){

    //
    this.transactionDetailsService.getUsername(this.fundTransfer.toAccountNumber).subscribe({
      next:(data)=>{
        this.name=data;
        if(confirm("Are you sure you want to pay to "+this.name)) {
          console.log("Implement delete functionality here");
    
        this.transactionDetailsService.fundsTransfer(this.fundTransfer).subscribe({
             
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
    
        this.fundTransfer=new FundTransferInfo(0);
    
          }
      },
      error:(error)=>{
        console.log(error);
      }
    
    })
   
    }
  

  }

 