import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Libro } from '../../negocio/libro';
import { LibroRestServiceProvider } from '../../providers/libro-rest-service/libro-rest-service';
import { HomePage } from '../home/home';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {

  libro:Libro= new Libro();
  constructor(public navCtrl: NavController, public navParams: NavParams,public miservicio:LibroRestServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallePage');
  }

  nuevo(){
    console.log(this.libro);

    this.miservicio.insert(this.libro).then((datos)=>{

        this.navCtrl.push(HomePage);
    })

  }

}
