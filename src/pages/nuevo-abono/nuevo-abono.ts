import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
import { ConstantesProvider } from '../../providers/constantes/constantes';

/**
 * Generated class for the NuevoAbonoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-nuevo-abono',
  templateUrl: 'nuevo-abono.html',
})
export class NuevoAbonoPage {
  apiUrl = this.constantes.urlApi;
  cuentas: any;
  saldo_total: any;
  public cliente: any;  
  public valor_abono: any;
  public nota_abono: any;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public http: HttpClient, 
              public restProvider: RestProvider,
              public constantes: ConstantesProvider) {
    this.cliente = navParams.get("cliente");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoAbonoPage');
    this.saldo();
  }

  guardarAbono(pvalor_abono, pnota_abono, pcliente ){
    this.http.post(this.apiUrl+'pagos', {        
        "pag_valor": this.valor_abono,        
        "pag_nota": this.nota_abono,
        "pag_cliente_id": this.cliente.ter_id
      }).subscribe(data => {          
        console.log(data);
        this.navCtrl.pop();        
      }, err => {        
        console.log(err); 
        alert('estás guardando mal los datos hijo');       
      });
  }

  getSaldoTotal(){
    var temp = 0;
    for(var i=0; i<this.cuentas.length; i++){
      temp += this.cuentas[i].vnt_saldo;
     
    }
    return temp;
  }

  saldo(){   
    this.restProvider.getSaldo(this.cliente.ter_id)
    .then(data => {
      this.cuentas = data;      
      console.log(this.cuentas);
      this.saldo_total = this.getSaldoTotal();
    }).catch(err => {
      alert(err);
    });
  
  }

}
