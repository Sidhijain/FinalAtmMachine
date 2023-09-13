import { Address } from "./Address";
import { CardDetails } from "./CardDetails";

export class UserRegistration{
    userId?:string;
    userName:string;
    userDOB:Date;
    phoneNo:string;
    aadharNumber?:number;
    emailId:string;
    password:string;
    confirmPassword:string;
    address:Address;
    cardDetails?:CardDetails;
    // street:string;
    // district:string;
    // pincode:number;
    // state:string;

    constructor(userName:string, userDOB:Date, phoneNo:string, emailId:string, password:string, confirmPassword:string, address:Address, aadharNumber?:number,cardDetails?:CardDetails){
        this.userName = userName;
        this.userDOB = userDOB;
        this.phoneNo = phoneNo;
        this.aadharNumber = aadharNumber;
        this.emailId = emailId;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.address = address;
        this.cardDetails = cardDetails;
        // this.street =street;
        // this.district = district;
        // this.pincode =pincode;
        // this.state = state;

    }
    
}