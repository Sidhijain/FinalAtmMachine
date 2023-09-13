import { CardDetails } from "./card-details";

export class TransactionDetails {
    transactionId: string;
    toAccountNumber: number;
    fromAccountNumber: number;
    transactionDate: Date;
    balance: number;
    particulars:string;
    transactionType: any;
    cardDetails: CardDetails

    constructor(transactionId: string, toAccountNumber: number, fromAccountNumber: number, transactionDate: Date, balance: number,particulars:string, transactionType: string, cardDetails: CardDetails) {
        this.transactionId = transactionId;
        this.cardDetails = cardDetails;
        this.toAccountNumber = toAccountNumber;
        this.fromAccountNumber = fromAccountNumber;
        this.transactionDate = transactionDate;
        this.balance = balance;
        this.particulars=particulars;
        this.transactionType = transactionType;
    }
}
