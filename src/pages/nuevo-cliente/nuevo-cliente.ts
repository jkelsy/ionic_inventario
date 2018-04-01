import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import { RestProvider } from '../../providers/rest/rest';
import { ConstantesProvider } from '../../providers/constantes/constantes';

/**
 * Generated class for the NuevoClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-nuevo-cliente',
  templateUrl: 'nuevo-cliente.html',
})
export class NuevoClientePage {
  apiUrl = this.constantes.urlApi;
  public ter_nombre;
  public ter_direccion;
  public ter_telefono;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public http: HttpClient,  
              public restProvider: RestProvider,
              public constantes: ConstantesProvider) 
  {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoClientePage');
  }

  guardarCliente(){
    this.http.post(this.apiUrl+'terceros', {        
        "ter_nombre": this.ter_nombre,        
        "ter_direccion": this.ter_direccion,
        "ter_telefono": this.ter_telefono
      }).subscribe(data => {          
        console.log(data);
        this.navCtrl.pop();        
      }, err => {        
        console.log(err); 
        alert('estás guardando mal los datos hijo');       
      });
  }

}
