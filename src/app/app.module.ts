import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { PerfilPage } from '../pages/perfil/perfil';
import { OfertasPage } from '../pages/ofertas/ofertas';
import { LoginPage } from '../pages/login/login';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { QuieresEnseArPage } from '../pages/quieres-ense-ar/quieres-ense-ar';
import { FinanzasPage } from '../pages/finanzas/finanzas';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { AgregarMTodoDePagoPage } from '../pages/agregar-mtodo-de-pago/agregar-mtodo-de-pago';
import { QuieroEnseArPage } from '../pages/quiero-ense-ar/quiero-ense-ar';
import { TerminosYCondicionesPage } from '../pages/terminos-ycondiciones/terminos-ycondiciones';
import { ReciboDePagoPage } from '../pages/recibo-de-pago/recibo-de-pago';
import { CarnetEstudiantilPage } from '../pages/carnet-estudiantil/carnet-estudiantil';
import { TarjetaProfesionalPage } from '../pages/tarjeta-profesional/tarjeta-profesional';
import { CedulaDNIPage } from '../pages/cedula-dni/cedula-dni';
import { CargaDocumentacionPage } from '../pages/carga-documentacion/carga-documentacion';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PerfilPage,
    OfertasPage,
    LoginPage,
    RegistrarsePage,
    QuieresEnseArPage,
    FinanzasPage,
    AyudaPage,
    AgregarMTodoDePagoPage,
    QuieroEnseArPage,
    TerminosYCondicionesPage,
    ReciboDePagoPage,
    CarnetEstudiantilPage,
    TarjetaProfesionalPage,
    CedulaDNIPage,
    CargaDocumentacionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilPage,
    OfertasPage,
    LoginPage,
    RegistrarsePage,
    QuieresEnseArPage,
    FinanzasPage,
    AyudaPage,
    AgregarMTodoDePagoPage,
    QuieroEnseArPage,
    TerminosYCondicionesPage,
    ReciboDePagoPage,
    CarnetEstudiantilPage,
    TarjetaProfesionalPage,
    CedulaDNIPage,
    CargaDocumentacionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}