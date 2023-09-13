
import { Component, OnInit } from '@angular/core';

import { BillPaymentService } from 'src/app/Services/bill-payment.service';


import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from 'src/app/Services/data.service';
import { DthBill } from 'src/Class/dth-bill';

declare var Razorpay: any;

 

@Component({

  selector: 'app-payment',

  templateUrl: './payment.component.html',

  styleUrls: ['./payment.component.css']

})

 

export class PaymentComponent implements OnInit {
  sideNavStatus:boolean=false;
  message: string = "";

  errorMessage: string = "";

  billAmount!: number;

  hide = true;

  vendor: string = "";

  userId:any = sessionStorage.getItem("ID");

 

  dthBill: DthBill = new DthBill("");

 

  constructor(private billPayementService: BillPaymentService, private router: Router, private dataService: DataService) {

    // console.log("AM insde payment constructor");

  }

  ngOnInit(): void {

 this.vendor = this.dataService.getData();

    console.log(this.vendor);

    // this.payDTHAmount();

  }

 

 

  title: string = "";

  typeOfVendor: string = "";

 

 

 

  payDTHAmount(): void {

 

    this.billPayementService.payDTHAmount(this.dthBill,this.userId).subscribe({

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

 

    //let amount = this.DTHAmounToBePaidById();

    console.log(this.billAmount);

    this.billPayementService.createTransaction(this.billAmount,this.userId).subscribe({

      next: (response) => {

        console.log(response);

        if (response != null) {

          this.openTransactionModal(response);

        }

        else {

          this.errorMessage = "Check your internet connection. Trying to reconnect ..."

 

        }

 

      },

      error: (error) => {

        console.error(error);

        this.errorMessage = " Please enter valid details. ";

        this.message = ""

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

        if (response != null && response.razorpay_payment_id != null) {

          this.processResponse(response);

        }

        else {

          alert("Payment failed");

        }

      }

    };

    var razorPayObject = new Razorpay(options);

    razorPayObject.open();

  }

 

  payment_id: string = "";

  processResponse(resp: any) {

    console.log(resp);

     this.payment_id = resp.razorpay_payment_id;

    if (this.payment_id != "") {

      console.log("in payment"+this.dataService.getData());

      this.billPayementService.payDthBill(this.dataService.getData(),this.dthBill,this.userId).subscribe({

        next: (data) => {

          console.log("inside payment", +data);

          this.dthBill = data;

          console.log("inside payment", +this.dthBill);

        },

 

        error: (error) => {

          console.log(error);

        }

      })

    }

    console.log(this.payment_id);

    this.router.navigate(['/bill']);

  }

 

}

 