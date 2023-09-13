export class CardLimit{

    cardType:string;

    changedCardLimit?:number;

 

    constructor(cardType:string,changedCardLimit?:number){

        this.cardType = cardType;

        this.changedCardLimit = changedCardLimit;

    }

}