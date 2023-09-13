export class Address{
    street:string;
    district:string;
    pincode:number;
    state:string;

    constructor(street:string, district:string, state:string,  pincode:number){
         this.street =street;
        this.district = district;
        this.pincode = pincode;
        this.state = state;
    }
}