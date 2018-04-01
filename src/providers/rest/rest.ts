import { HttpClient} from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { ConstantesProvider} from '../constantes/constantes';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class RestProvider {  
  constructor(public http: HttpClient, public  constantes: ConstantesProvider) {
    console.log('Hello RestProvider Provider');
  }

  getClientes() {
    return new Promise((resolve, reject) => { 
      
      this.http.get(this.constantes.urlApi+'terceros').subscribe(data => {
        resolve(data);
        console.log(data);
      }, err => {
        reject(err);
        console.log(err);
      });
    });
  }

  getSaldo(pk){
    return new Promise((resolve, reject) => {      
      this.http.get(this.constantes.urlApi+'terceros/'+pk+'/deuda').subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
        console.log(err);
      });
    });
  }

}
