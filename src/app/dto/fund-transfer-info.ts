export class FundTransferInfo {

    // userId: String;
    // transactionAmount:Number;
    // toAccountNumber:Number;
    // cardPin:Number;

    constructor(public toAccountNumber:Number,public userId?: String,public transactionAmount?:Number,public cardPin?:Number){
    //  this.userId=userId;
    //  this.transactionAmount=transactionAmount;
    //  this.toAccountNumber=toAccountNumber;
    //  this.cardPin=cardPin
       }
}
