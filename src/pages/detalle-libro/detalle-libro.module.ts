import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleLibroPage } from './detalle-libro';

@NgModule({
  declarations: [
    DetalleLibroPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleLibroPage),
  ],
})
export class DetalleLibroPageModule {}
