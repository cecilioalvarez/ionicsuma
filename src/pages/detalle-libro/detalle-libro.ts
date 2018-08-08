import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibroRestServiceProvider } from '../../providers/libro-rest-service/libro-rest-service';
import { Libro } from '../../negocio/libro';

/**
 * Generated class for the DetalleLibroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle-libro',
  templateUrl: 'detalle-libro.html',
})
export class DetalleLibroPage {
  libro:Libro= new Libro();
  constructor(public navCtrl: NavController, public navParams: NavParams, public miservicio:LibroRestServiceProvider) {
    console.log(navParams.get("titulo"));

    console.log(miservicio);
    miservicio.findOne(navParams.get("titulo")).then(datos=>{

          this.libro=datos;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalleLibroPage');
  }

}
