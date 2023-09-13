import { Component, OnInit } from '@angular/core';
import { AdminRemark } from 'src/Class/AdminRemark';



import { AdminService } from 'src/app/Services/admin.service';

 

 

@Component({

  selector: 'app-admin-request',

  templateUrl: './admin-request.component.html',

  styleUrls: ['./admin-request.component.css']

})

export class AdminRequestComponent implements OnInit {

  requestsAll: any[] = [];

  adminRemarkContent: AdminRemark = new AdminRemark("");

  requestApprovalMessage: string = "";

  requestErrorMessage: string = "";

 

  typeOfRequest: string = "";

 

  setValue(value: any) {

    this.typeOfRequest = value.target.value;

  }

 

  changeRequest() {

    if (this.typeOfRequest != "")

      this.loadAllCardLostRequests();

    else

      this.loadAllPendingRequests();

   

  }

 

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {

    if (this.typeOfRequest != "")

      this.loadAllCardLostRequests();

    else

      this.loadAllPendingRequests();

  }

 

 

 

  loadAllCardLostRequests() {

    this.adminService.getAllCardLostRequests(this.typeOfRequest).subscribe({

      next: (data) => {

        console.log("in card lost request:"+data);

        this.requestsAll = data;

        console.log(this.requestsAll);

      },

      error: (error) => {

        console.log(error);

      }

    })

  }

 

 

 

  loadAllPendingRequests() {

    this.adminService.getAllPendingRequests().subscribe({

      next: (data) => {

        console.log(data);

        this.requestsAll = data;

        //console.log(this.requestsAll);

      },

      error: (error) => {

        console.log(error);

      }

    })

  }

 

  approveCardLostRequestByAdmin(reqId: string) {

    console.log(reqId);

    this.adminService.approveRequest(reqId).subscribe({

      next: (data) => {

        if (data == "Approved")

          this.requestApprovalMessage = "Request Approved sucessfully";

        else if (data == "Pending")

          this.requestErrorMessage = "Request Not Approved, Please try again after sometime";

        console.log(data);

 

      },

 

      error: (error) => {

        console.log(error);

        this.requestErrorMessage = "Request Not Approved, Please try again after sometime";

      },

      complete: () => {

        window.location.reload();

      }

 

 

    })

 

    this.requestApprovalMessage = "";

    this.requestErrorMessage = "";

  }

 

 

  

  setRemarkByAdmin(adminRemarkContent: string, reqId: string) {

    //console.log("in component:"+reqId+" "+adminRemarkContent);

    this.adminRemarkContent.remarkOnRequest = adminRemarkContent;

    this.adminService.setRemark(this.adminRemarkContent, reqId).subscribe({

      next: (data) => {

        console.log("in component:" + data);

        this.adminRemarkContent.remarkOnRequest = "";

      },

 

      error: (error) => {

        console.log(error);

      }

    })

  }

}

