export class Request {

    // reqId?:string;

    // accountNumber?:number;

    // request:string;

    // requestDesc:string;

    // dateOfRequest?:string;

    // requestStatus?:string;

    // adminRemark?:string;
    // userId?:string;
    // constructor(request:string,requestDesc: string)
    // {
    //     this.request = request;

    //     this.requestDesc = requestDesc;

    // }
    constructor(public request: string,
        public requestDesc: string,public dateOfRequest?: string,public reqId?: string,public accountNumber?: number,public requestStatus?: string,
        public adminRemark?: string,public userId?: string) {
        // this.reqId = reqId;

        // this.accountNumber = accountNumber;

        // this.request = request;

        // this.requestDesc = requestDesc;

        // this.dateOfRequest = dateOfRequest;

        // this.requestStatus = requestStatus;

        // this.adminRemark = adminRemark;
        // this.userId=userId;

    }

}