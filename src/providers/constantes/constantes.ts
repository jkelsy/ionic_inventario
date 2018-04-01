import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConstantesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConstantesProvider {

  public urlApi: string = "http://104.236.13.116/microinventario/api/";

  constructor(public http: HttpClient) {
    console.log('Hello ConstantesProvider Provider');
  }

}
