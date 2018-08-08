import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LibroRestServiceProvider } from '../../providers/libro-rest-service/libro-rest-service';
import { Libro } from '../../negocio/libro';
import { DetallePage } from '../detalle/detalle';
import { DetalleLibroPage } from '../detalle-libro/detalle-libro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaLibros:Libro[]=[];

  constructor(public navCtrl: NavController,public miservicio:LibroRestServiceProvider) {


    miservicio.findAll().then(datos=>{

          this.listaLibros=datos;
      })
  }

  nuevo() {

  this.navCtrl.push(DetallePage)
  }
  libroSeleccionado(libro:Libro) {

      this.navCtrl.push(DetalleLibroPage,{titulo:libro.titulo});
  }

}
