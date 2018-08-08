import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LibroRestServiceProvider } from '../providers/libro-rest-service/libro-rest-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetallePage } from '../pages/detalle/detalle';
import {DetalleLibroPage} from '../pages/detalle-libro/detalle-libro'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallePage,
    DetalleLibroPage
  ],
  imports: [
    BrowserModule,HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallePage,
    DetalleLibroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LibroRestServiceProvider
  ]
})
export class AppModule {}
