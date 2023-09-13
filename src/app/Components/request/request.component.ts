import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/Services/request.service';
import { Request } from 'src/Class/Request';
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  sideNavStatus:boolean=false;
  requests:Request[]=[];
  userRequest:Request = new Request('','');
  message:string="";
  errorMessage:string="";
  userId:string ="";
  isLoaded:boolean=false;
  cardType:string="";
  constructor(private requestService :RequestService,private router: Router) { }

  
  ngOnInit(): void {
    this.loadCardTypeToComponent();
  }
  addRequest(){
    console.log(this.userRequest.request+"-------------"+this.userRequest.requestDesc);
    const userId = sessionStorage.getItem("ID");
    console.log(userId);
    this.requestService.addRequest(this.userRequest,userId)
    .subscribe({
      next:(data)=>{
    
        console.log("Hii->"+data);
        this.message="Request added";
        this.errorMessage="";
        this.router.navigate(['/viewrequest'])
      },
      error:(error)=>{
        console.log(error);
        this.errorMessage="Request could not be added";
        this.message="";
      }
    });
    this.requestService.addRequest(this.userRequest,userId);
    this.userRequest=new Request('','');
  }
 
  onClick(){
    this.router.navigate(['/viewrequest'])
  }
  loadCardTypeToComponent(){
    this.isLoaded=false;
    this.requestService.getCardType(this.userId).subscribe
    (
      {
        next:(data)=>{
          this.isLoaded=true;
          console.log(data);
          this.cardType=data;
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
