import { Address } from "./Address";

export class UserRegistration{

    userName:string;

    userDOB:Date;

    phoneNo:string;

    aadharNumber:number;

    emailId:string;

    password:string;

    confirmPassword:string;

    address:Address;

  

 

    constructor(userName:string, userDOB:Date, phoneNo:string, aadharNumber:number, emailId:string, password:string, confirmPassword:string, address:Address){

        this.userName = userName;

        this.userDOB = userDOB;

        this.phoneNo = phoneNo;

        this.aadharNumber = aadharNumber;

        this.emailId = emailId;

        this.password = password;

        this.confirmPassword = confirmPassword;

        this.address = address;

        // this.street =street;

        // this.district = district;

        // this.pincode =pincode;

        // this.state = state;

 

    }

}