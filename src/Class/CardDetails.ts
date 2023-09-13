import { UserRegistration } from "./UserRegistration";

export class CardDetails{
    cardId?:string;
    accountNumber?:number;
    cardNumber?:number;
    amount?:number;
    cvv?:number;
    validThrough?:Date;
    cardType?:string;
    cardLimit?:string;
    cardstatus?:string;
    cardPin?:number;
    userTotallyRegister?:string;
    userRegistration?:UserRegistration;

    constructor(accountNumber?:number, cardNumber?:number, amount?:number){
        this.accountNumber = accountNumber;
        this.cardNumber = cardNumber;
        this.amount = amount;
    }
}