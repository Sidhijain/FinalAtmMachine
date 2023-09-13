export class BillPayments{
    vendorName: any;
    localeCompare(b: BillPayments): number {
      throw new Error('Method not implemented.');
    }
    name: any;
    toLowerCase() {
      throw new Error('Method not implemented.');
    }
    typeOfVendor:string;

    constructor(typeOfVendor:string){
        this.typeOfVendor=typeOfVendor;
    }
}