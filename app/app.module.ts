import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { FincasPage} from '../pages/fincas/listarFincas/fincas';
import { FincasProvider} from '../providers/fincas';
import { AddFincasPage} from '../pages/fincas/addFincas/addFincas';
import { DetailsFincasPage} from '../pages/fincas/detailsFincas/detailsFincas';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FincasPage,
    AddFincasPage,
    DetailsFincasPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FincasPage,
    AddFincasPage,
    DetailsFincasPage,
  ],
  providers: [
    FincasProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
