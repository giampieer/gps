import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Geolocation} from "@ionic-native/geolocation";
import {NativeGeocoder} from "@ionic-native/native-geocoder";
import {LocationAccuracy} from "@ionic-native/location-accuracy";
import { WebservicesProvider } from '../providers/webservices/webservices';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    NativeGeocoder,
    LocationAccuracy,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebservicesProvider
  ]
})
export class AppModule {}
