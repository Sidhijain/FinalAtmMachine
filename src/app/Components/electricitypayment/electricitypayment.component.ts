import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { ElectricityBillDto } from 'src/Class/ElectricityBillDto';


import { BillPaymentService } from 'src/app/Services/bill-payment.service';

import { DataService } from 'src/app/Services/data.service';

 

declare var Razorpay: any;

 

 

@Component({

  selector: 'app-electricitypayment',

  templateUrl: './electricitypayment.component.html',

  styleUrls: ['./electricitypayment.component.css']

})

export class ElectricitypaymentComponent implements OnInit{

  message: string = "";
  sideNavStatus:boolean=false;
  errorMessage: string = "";

  billAmount!: number;

  hide = true;

 

  electricityBill: ElectricityBillDto = new ElectricityBillDto("");

  vendor:string="";

 userId:any = sessionStorage.getItem("ID");

  constructor(private billPayementService: BillPaymentService,private router:Router,private dataService:DataService) {

 

  }

 

 

  ngOnInit(): void {

    this.vendor = this.dataService.getData();

       console.log(this.vendor);

       // this.payDTHAmount();

     }

 

  payElectricityAmount(): void {

 

    this.billPayementService.payElectricityAmount(this.electricityBill,this.userId).subscribe({

      next: (response) => {

        let amount = Math.round(response);

        console.log(amount);

        this.billAmount = amount;

        //this.openTransactionModal(response);

        this.message = "Amount : " + amount;

 

        this.errorMessage = ""

 

      },

      error: (error) => {

        console.error(error);

        this.errorMessage = " Unsuccessful :" + error.error;

        this.message = ""

      }

    });

    // this.dthBill = new DthBill("");

    // return this.billAmount;

  }

 

  createTransactionAndPay(orderForm: NgForm) {

 

     console.log(this.billAmount);

    this.billPayementService.createTransaction(this.billAmount,this.userId).subscribe({

      next: (response) => {

        console.log(response);

        if (response != null) {

          this.openTransactionModal(response);

        }

        else {

         this.errorMessage="Check your internet connection. Trying to reconnect ..."

        }

 

      },

      error: (error) => {

        console.error(error);

         this.errorMessage = "Please enter valid details. " ;

       

      }

    });

 

  }

  openTransactionModal(response: any) {

    var options = {

      order_id: response.orderId,

      key: response.key,

      amount: response.amount,

      currency: response.currency,

      handler: (response: any) => {

        this.processResponse(response);

      }

    };

    var razorPayObject = new Razorpay(options);

    razorPayObject.open();

  }

 

 

  payment_id:string="";

  processResponse(resp: any) {

    console.log(resp);

    this.payment_id = resp.razorpay_payment_id;

    if(this.payment_id != ""){

      console.log("in payment"+this.dataService.getData());

      this.billPayementService.payElectricityBill(this.dataService.getData(),this.electricityBill,this.userId).subscribe({

        next:(data)=>{

          console.log("inside payment",+data);

          this.electricityBill = data;

          console.log("inside payment", +this.electricityBill);

          

       

        },

 

        error:(error)=>{

          console.log(error);

        }

      })

    }

    console.log(this.payment_id);

 

    this.router.navigate(['/bill']);

 

  }

 

}

 