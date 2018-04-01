import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DetalleVentaPage} from '../../pages/detalle-venta/detalle-venta';
import { NuevoAbonoPage} from '../../pages/nuevo-abono/nuevo-abono';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  clientes: any;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    this.getClientes();    
  }

  getClientes() {
    this.restProvider.getClientes()
    .then(data => {
      this.clientes = data;
      console.log(this.clientes);
    });
  }

  nuevaVenta(cliente){
    this.navCtrl.push(DetalleVentaPage, { cliente:cliente })
  }

  nuevoAbono(cliente){
    this.navCtrl.push(NuevoAbonoPage, { cliente:cliente })
  }
}
