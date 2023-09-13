import { Component, OnInit } from '@angular/core';



import { AdminService } from 'src/app/Services/admin.service';

import {FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { CardLimit } from 'src/Class/CardLimit';

 

@Component({

  selector: 'app-card-limit',

  templateUrl: './card-limit.component.html',

  styleUrls: ['./card-limit.component.css']

})

export class CardLimitComponent implements OnInit{

  typeOfCard:string="Silver";

  oldCardLimit?:number;

  newCardLimit?:number;

  cardLimitChangedSuccessfully:boolean=false;

 

  cardLimitContent:CardLimit = new CardLimit("",0);

 

  cantBeEmpty : boolean=false;

  ngOnInit(): void {

    

  }

 

  constructor(private adminService:AdminService,private formBuilder:FormBuilder){}

 

  setValue(value: any) {

    this.typeOfCard = value.target.value;

  }

 

  changeCard(){

 

  }

 

 

  changingCardLimit(cardType:string,cardLimit?:number){

    console.log(cardType+"-----"+cardLimit);

    

    this.cardLimitContent.cardType = cardType;

    this.cardLimitContent.changedCardLimit = cardLimit;

    this.adminService.setCardLimit(this.cardLimitContent).subscribe({

      next:(data)=>{

        console.log(data);

        this.cardLimitChangedSuccessfully = true;

        this.typeOfCard="";

        this.newCardLimit=0;

      },

 

      error:(error)=>{

        console.log(error);

      }

    });

  }

 

 

}

 

