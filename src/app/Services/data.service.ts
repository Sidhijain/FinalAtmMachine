import { Injectable } from '@angular/core';

 

@Injectable({

  providedIn: 'root'

})

export class DataService {

  vendor: string = '';

  constructor() { }

  setData(data: string) {

    console.log(data);

    this.vendor = data;

  }

  getData() {

    return this.vendor;

  }

 

}