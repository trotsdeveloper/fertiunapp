import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { FincasPage} from '../pages/fincas/listarFincas/fincas';
import { FincasProvider} from '../providers/fincas';
import { LotesProvider } from '../providers/lotes';
import { AddFincasPage} from '../pages/fincas/addFincas/addFincas';
import { DetailsFincasPage} from '../pages/fincas/detailsFincas/detailsFincas';
import { UpdateFincasPage} from '../pages/fincas/updateFincas/updateFincas';
import { DeleteFincasPage} from '../pages/fincas/deleteFincas/deleteFincas';
import { LotesPage} from '../pages/lotes/listarLotes/lotes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FincasPage,
    AddFincasPage,
    DetailsFincasPage,
    UpdateFincasPage,
    DeleteFincasPage,
    LotesPage,
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
    UpdateFincasPage,
    DeleteFincasPage,
    LotesPage,
  ],
  providers: [
    FincasProvider,
    LotesProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
