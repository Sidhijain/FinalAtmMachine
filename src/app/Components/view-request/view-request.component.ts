import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from 'src/app/Services/request.service';
import { Request } from 'src/Class/Request';
@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.css']
})
export class ViewRequestComponent {
  sideNavStatus:boolean=false;
  constructor(private requestService :RequestService,private router: Router) { }
  isLoaded:boolean=false;
  request:any[]=[];
  // userId:string ="";
  isUpdate:boolean=false;
  requests:Request[]=[];
  requestId:string="";
  userRequest:Request = new Request("","","");
  updateUserRequest:Request = new Request("","","");
  cardType:string="";
  isSuccess:boolean=false;
  ngOnInit(): void {
    this.loadAllProductsToComponent();
    this. loadCardTypeToComponent();
  }
  updateRequest(requestId:string)
  {
    this.isUpdate=true;
    // console.log(requestId);  
    this.userRequest = this.request.find(request=>(request.requestId==requestId));
    // console.log(this.userRequest);
   
  }
  updateRequestSubmit()
  {
    console.log("success");
    const userId = sessionStorage.getItem("ID");
    this.requestService.updateRequest(this.userRequest,userId).subscribe
    (
      {
        next:(data)=>{
          console.log("heyyy"+data);
          this.loadAllProductsToComponent();
        },
        error:(error)=>{
          console.log("in error:"+JSON.stringify(error));
         }
      }
    );
    // this.requestService.updateRequest(this.updateUserRequest);
    this.isUpdate=false;
    this.isSuccess=true;
    this.loadAllProductsToComponent();
   

  }
  loadAllProductsToComponent(){
    this.isLoaded=false;
    const userId = sessionStorage.getItem("ID");

    this.requestService.getRequestOfUser(userId).subscribe
    (
      {
        next:(data)=>{
          this.isLoaded=true;
          console.log(data);
          this.request=data;
        },
        error:(error)=>{

          console.log(error);

         },
         complete:()=>
         console.log("loaded all data")
      }

    );

  
  }
  onClick(){
    this.router.navigate(['/request']);
  }
  loadCardTypeToComponent(){
    this.isLoaded=false;
    const userId = sessionStorage.getItem("ID");
    this.requestService.getCardType(userId).subscribe
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
  deleteRequest(deleteId:string){
    console.log(deleteId);
    if(confirm("Are you sure you want to delete the request ")) {
      // console.log("Implement delete functionality here");
    
    this.requestService.deleteRequest(deleteId).subscribe(
      {
        next:(data)=>{
          this.request=data.filter(this.request.find((request:any) =>!(request.requestId==deleteId)));
          
        },
        error:(error)=>{

          console.log(error);

         },

         complete:()=>{
        window.location.reload();
         console.log("deleted data")
         }
      }

    );
    
   }
  }
}
