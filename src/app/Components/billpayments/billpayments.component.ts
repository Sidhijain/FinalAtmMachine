import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { BillPaymentService } from 'src/app/Services/bill-payment.service';

import { Router } from '@angular/router';
import { BillPayments } from 'src/Class/BillPayments';
import { DataService } from 'src/app/Services/data.service';
 

@Component({

  selector: 'app-billpayments',

  templateUrl: './billpayments.component.html',

  styleUrls: ['./billpayments.component.css']

})

export class BillpaymentsComponent implements OnInit {
  sideNavStatus:boolean=false;
  billPayments: BillPayments[] = [];

  vendors: string[] = [];

  searchText: string = '';

 

  constructor(private billPayementService: BillPaymentService, private router: Router,private dataService:DataService) {

 

  }

  ngOnInit(): void {

 

  }

 

  title: string = "";

 

  typeOfVendor: string = "";

 

 

 

 

  changeVendor() {

    if (this.typeOfVendor == "DTH")

      this.getVendorsByType(this.typeOfVendor);

    // this.router.navigate(['']);

    else if (this.typeOfVendor == "ElectricityBill")

      this.getVendorsByType(this.typeOfVendor);

  }

 

  getVendorsByType(typeOfVendor: string) {

 

    this.billPayementService.getVendorsListByType(typeOfVendor).subscribe({

      next: (data) => {

        this.title = this.typeOfVendor;

        console.log(data);

        this.billPayments = data;

        this.vendors = data;

        // Sort the billPayments array

        this.billPayments.sort((a, b) => a.localeCompare(b));

 

        // Filter vendors based on searchText

 

 

      },

      error: (error) => {

        console.log(error);

      }

    });

  }

 

  payDTHAmount(vendor: string) {

    console.log("dth Vendor:"+vendor);

    this.dataService.setData(vendor);

    //this.router.navigateByUrl("detail/"+id);

    this.router.navigate(['/dth-bill']);

  }

 

  payElectricityAmount(vendor:string) {

    console.log("Ele vendor:"+vendor);

    this.dataService.setData(vendor);

    //this.router.navigateByUrl("detail/"+id);

    this.router.navigate(['/electricity-bill']);

  }

}

 