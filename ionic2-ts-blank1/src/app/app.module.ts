import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Weather } from '../providers/Weather';
import { WeatherDetailPage } from '../pages/WeatherDetail/WeatherDetail';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WeatherDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WeatherDetailPage
  ],
  providers: [Weather,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
