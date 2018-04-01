import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { NuevoAbonoPage } from '../nuevo-abono/nuevo-abono';
import { NuevoClientePage } from '../nuevo-cliente/nuevo-cliente';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  clientes: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.clientes = this.getClientes();    
  }

  getClientes() {
    this.restProvider.getClientes()
    .then(data => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

  nuevoCliente(){
    this.navCtrl.push(NuevoClientePage)
  }

}
