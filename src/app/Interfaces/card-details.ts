export class CardDetails {
    cardId: String;
    accountNumber: Number;
    cardNumber: Number;
    cvv: Number;
    validThrough: Date;
    cardType: any;
    cardLimit: Number;
    cardstatus: any;
    amount: Number;
    cardPin: Number;
    userTotallyRegister: any;
    userRegistration: any;
    constructor(cardId: String, accountNumber: Number, cardNumber: Number, cvv: Number, validThrough: Date, cardType: any, cardLimit: Number, cardstatus: any, amount: Number, cardPin: Number, userTotallyRegister: any, userRegistration: any) {
        this.cardId = cardId,
            this.accountNumber = accountNumber,
            this.cardNumber = cardNumber,
            this.cvv = cvv,
            this.validThrough = validThrough,
            this.cardType = cardType,
            this.cardLimit = cardLimit,
            this.cardstatus = cardstatus,
            this.amount = amount,
            this.cardPin = cardPin,
            this.userTotallyRegister = userTotallyRegister,
            this.userRegistration = userRegistration
    }
}