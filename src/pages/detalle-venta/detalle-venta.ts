import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { ConstantesProvider } from '../../providers/constantes/constantes';

/**
 * Generated class for the DetalleVentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalle-venta',
  templateUrl: 'detalle-venta.html',
})
export class DetalleVentaPage {
  apiUrl = this.constantes.urlApi;
  public cliente: any;
  public valor_venta: any;
  public valor_abono: any;
  public nota_venta: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public http: HttpClient,
              public constantes: ConstantesProvider) {
    this.cliente = navParams.get("cliente");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleVentaPage');
  }

  guardarVenta(pvalor_venta, pvalor_abono, pnota_venta, pcliente ){
    this.http.post(this.apiUrl+'ventas', {        
        "vnt_valor": this.valor_venta,
        "vnt_valor_cancelado": this.valor_abono,
        "vnt_nota": this.nota_venta,        
        "vnt_cliente_id": this.cliente.ter_id
      }).subscribe(data => {          
        console.log(data);  
        this.navCtrl.pop();  
      }, err => {        
        console.log(err); 
        alert('estás guardando mal la venta');       
      });
  }

}
